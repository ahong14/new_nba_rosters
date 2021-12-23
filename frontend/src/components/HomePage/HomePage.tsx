import { Flex, Container, Heading, Stack } from '@chakra-ui/react';

const HomePage = () => {
    return (
        <Flex direction="column" alignItems="center">
            <Container>
                <Stack align="center">
                    <Heading alignSelf="center"> NBA Rosters</Heading>
                </Stack>
            </Container>
        </Flex>
    );
};

export default HomePage;
