import React, { useState, KeyboardEvent } from 'react';
import {
    Container,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Spinner,
    Text
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useLazyQuery, gql } from '@apollo/client';
import { PlayerInterface } from '../../interfaces/interfaces';
import Player from '../Player/Player';

const SearchPlayers = () => {
    const [searchInputValue, setSearchInputValue] = useState<string>('');

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchInputValue(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            getSearchResults();
        }
    };

    const getSearchResultsQuery = gql`
        query getSearchResults($query: String!, $from: Int) {
            querySearch(query: $query, from: $from) {
                name
                imgURL
                pos
                college
                ratings {
                    dnk
                    stre
                    spd
                    jmp
                    endu
                    ins
                    ft
                    fg
                    tp
                    diq
                    oiq
                    reb
                }
                draft {
                    round
                    pick
                    year
                    originalTid
                    tid
                }
                hgt
                weight
                awards {
                    season
                    type
                }
            }
        }
    `;
    // useLazyQuery, executed manually instead of on render
    const [getSearchResultsGraphql, { loading, data, error }] = useLazyQuery(
        getSearchResultsQuery
    );
    const getSearchResults = () => {
        const searchQuery = {
            query_string: {
                query: searchInputValue
            }
        };
        // execute graphql query
        getSearchResultsGraphql({
            variables: {
                query: JSON.stringify(searchQuery),
                from: 0
            }
        });
    };
    const playerResults =
        !data || (data && !data.querySearch) ? (
            []
        ) : data && data.querySearch && data.querySearch.length === 0 ? (
            <Text alignSelf="center"> No search results found </Text>
        ) : (
            data.querySearch.map((player: PlayerInterface, index: number) => {
                return (
                    <Player
                        key={player.name + `_${index}`}
                        name={player.name}
                        ratings={player.ratings}
                        pos={player.pos}
                        born={player.born}
                        imgURL={player.imgURL}
                        draft={player.draft}
                        college={player.college}
                        stats={player.stats}
                        awards={player.awards}
                        hgt={player.hgt}
                        weight={player.weight}
                    />
                );
            })
        );
    return (
        <Container
            maxW="xlg"
            dir="col"
            justifyContent="center"
            alignItems="center"
        >
            <FormControl
                display="flex"
                flexDir="column"
                width="100%"
                alignItems="center"
                justifyContent="center"
                onKeyPress={handleKeyPress}
            >
                <FormLabel fontWeight="bold"> Search Players </FormLabel>
                <Stack
                    direction="row"
                    alignContent="center"
                    width="50%"
                    alignSelf="center"
                >
                    <Input onChange={handleSearchInputChange} />
                    <SearchIcon
                        cursor="pointer"
                        alignSelf="center"
                        onClick={getSearchResults}
                    />
                </Stack>
            </FormControl>

            {loading ? (
                <Stack marginTop="20">
                    <Spinner alignSelf="center" />
                </Stack>
            ) : (
                <Container
                    maxW="xlg"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="20"
                >
                    <Stack direction="column">{playerResults}</Stack>
                </Container>
            )}
        </Container>
    );
};

export default SearchPlayers;
