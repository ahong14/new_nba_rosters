import { Box, Container, Heading, Text, Image, Stack } from '@chakra-ui/react';
import { TeamsInterface } from '../../interfaces/interfaces';

const TeamInfo = (props: TeamsInterface) => {
    const teamColors = props.colors?.map((color) => {
        return (
            <Box
                border="solid 1px"
                width="100px"
                height="100px"
                bg={color}
            ></Box>
        );
    });
    return (
        <Container>
            <Box>
                <Heading alignSelf="center">
                    {props.region} {props.name} ({props.abbrev})
                </Heading>
                <Image src={props.imgURL} boxSize="220px" alt="team image" />
                <Text>
                    <strong>Population: </strong> {props.pop}M
                </Text>
                <Text>
                    <strong> Stadium Capacity:</strong> {props.stadiumCapacity}
                </Text>
                <Stack>
                    <Text>
                        <strong> Colors: </strong>
                    </Text>
                    <Stack direction="row">{teamColors}</Stack>
                </Stack>
            </Box>
        </Container>
    );
};

export default TeamInfo;
