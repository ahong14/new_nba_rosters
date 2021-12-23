import {
    Flex,
    Box,
    Text,
    Stack,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import TeamsMenuItem from '../TeamsMenuItem/TeamsMenuItem';
import { TeamsInterface } from '../../interfaces/interfaces';

const getAllTeams = gql`
    query getAllTeams {
        allTeams {
            tid
            region
            name
            abbrev
            imgURLSmall
        }
    }
`;

const Navbar = () => {
    const { loading, data, error } = useQuery(getAllTeams);
    const teamsMenuItems =
        data && data.allTeams
            ? data.allTeams.map((team: TeamsInterface) => {
                  return (
                      <TeamsMenuItem
                          key={team.tid}
                          imgURLSmall={team.imgURLSmall}
                          region={team.region}
                          name={team.name}
                          abbrev={team.abbrev}
                          tid={team.tid}
                      />
                  );
              })
            : [];

    return (
        <Flex
            as="nav"
            align="center"
            wrap="wrap"
            w="100%"
            bg="#219DFF"
            mb={8}
            p={8}
            color="white"
            position="sticky"
            zIndex="999"
            top="0"
        >
            <Stack spacing={20} align="center" justify="center" direction="row">
                <Box>
                    <Text fontSize="lg" fontWeight="bold">
                        <Link
                            to="/"
                            style={{
                                color: 'inherit',
                                textDecoration: 'inherit'
                            }}
                        >
                            NBA Rosters
                        </Link>
                    </Text>
                </Box>
                <Menu preventOverflow={false}>
                    <MenuButton as={Text} fontSize="lg" fontWeight="bold">
                        Teams
                    </MenuButton>
                    <MenuList
                        maxW="600px"
                        display="flex"
                        flexDirection="row"
                        flexWrap="wrap"
                        overflow="auto"
                        maxH="600px"
                    >
                        {teamsMenuItems}
                    </MenuList>
                </Menu>
                <Text fontSize="lg" fontWeight="bold">
                    <Link
                        to="/players"
                        style={{ color: 'inherit', textDecoration: 'inherit' }}
                    >
                        Players
                    </Link>
                </Text>
            </Stack>
        </Flex>
    );
};

export default Navbar;
