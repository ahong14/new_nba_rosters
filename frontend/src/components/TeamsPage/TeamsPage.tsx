import { Flex, Heading, Stack } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { PlayerInterface } from '../../interfaces/interfaces';
import Player from '../Player/Player';
const getAllPlayersByTeam = gql`
    query getAllPlayersByTeam($teamid: Int!) {
        allPlayersByTeam(teamid: $teamid) {
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
        }
    }
`;
const TeamsPage = () => {
    const { teamid } = useParams();
    const { loading, data, error } = useQuery(getAllPlayersByTeam, {
        variables: { teamid: Number(teamid) }
    });
    const playerItems =
        data && data.allPlayersByTeam
            ? data.allPlayersByTeam.map((player: PlayerInterface) => {
                  return (
                      <Player
                          name={player.name}
                          ratings={player.ratings}
                          pos={player.pos}
                          born={player.born}
                          imgURL={player.imgURL}
                          draft={player.draft}
                          college={player.college}
                          stats={player.stats}
                      />
                  );
              })
            : [];
    return (
        <Flex direction="column" justifyContent="space-between">
            <Stack align="center">
                <Heading> Players </Heading>
                {playerItems}
            </Stack>
        </Flex>
    );
};

export default TeamsPage;
