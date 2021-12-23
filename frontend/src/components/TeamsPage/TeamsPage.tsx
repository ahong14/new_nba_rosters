import { useState } from 'react';
import { Container, Flex, Heading, Stack, Spinner } from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TeamsState } from '../../store/reducers/teamsReducer';
import { PlayerInterface, TeamsInterface } from '../../interfaces/interfaces';
import TeamInfo from '../TeamInfo/TeamInfo';
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
    const teams = useSelector((state: TeamsState) => state.teams);
    const [currentTeam, setCurrentTeam] = useState<TeamsInterface>({
        tid: -1,
        region: '',
        name: ''
    });
    // get current team information
    if (
        teamid &&
        (currentTeam.tid === -1 ||
            Number(currentTeam.tid) !== Number(teamid)) &&
        (teams || []).length > 0
    ) {
        // find matching index of current team id and set current team if found
        const teamIndex = teams.findIndex(
            (team) => Number(team.tid) === Number(teamid)
        );
        if (teamIndex >= 0) {
            setCurrentTeam({ ...teams[teamIndex] });
        }
    }
    // make graphql query to get players for team
    const { loading, data, error } = useQuery(getAllPlayersByTeam, {
        variables: { teamid: Number(teamid) }
    });
    const playerItems =
        data && data.allPlayersByTeam
            ? data.allPlayersByTeam.map(
                  (player: PlayerInterface, index: number) => {
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
                          />
                      );
                  }
              )
            : [];
    return (
        <Flex direction="column" justifyContent="space-between">
            {loading ? (
                <Stack align="center">
                    <Heading> Loading players </Heading>
                    <Spinner align="center" size="xl" />
                </Stack>
            ) : (
                <Container
                    border="1px"
                    borderRadius="10px"
                    borderColor="gray"
                    width="100vw"
                    justifyContent="space-between"
                >
                    <Stack align="center">
                        <TeamInfo
                            tid={currentTeam.tid}
                            region={currentTeam.region}
                            name={currentTeam.name}
                            abbrev={currentTeam.abbrev}
                            imgURL={currentTeam.imgURL}
                            pop={currentTeam.pop}
                            stadiumCapacity={currentTeam.stadiumCapacity}
                            colors={currentTeam.colors}
                        />
                    </Stack>
                    <Stack align="center">
                        <Heading> Players </Heading>
                        {playerItems}
                    </Stack>
                </Container>
            )}
        </Flex>
    );
};

export default TeamsPage;
