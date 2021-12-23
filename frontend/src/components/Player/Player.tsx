import React from 'react';
import {
    Box,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    Button
} from '@chakra-ui/react';
import { PlayerInterface } from '../../interfaces/interfaces';

const Player = (props: PlayerInterface) => {
    return (
        <Container
            flexDirection="column"
            alignSelf="center"
            border="solid 1px black"
            borderRadius="30px"
        >
            <Stack direction="row" spacing="24px">
                <Image
                    src={props.imgURL}
                    boxSize="280px"
                    borderWidth="1px"
                    borderRadius="100px"
                />
                <Box>
                    <Heading fontWeight="bold">{props.name}</Heading>
                    <Text>
                        <strong> Position:</strong> {props.pos}
                    </Text>
                    <Text>
                        <strong>College: </strong> {props.college}
                    </Text>
                    <Box>
                        <Text>
                            <strong> Draft Year:</strong> {props.draft.year}
                        </Text>

                        {props.draft.round > 0 ? (
                            <Text>
                                <strong> Round:</strong> {props.draft.round}
                                <strong> Pick:</strong> {props.draft.pick}
                            </Text>
                        ) : (
                            <Text>
                                <strong> Undrafted </strong>
                            </Text>
                        )}
                    </Box>
                    <Button size="lg" colorScheme="blue">
                        View Ratings
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
};

export default Player;
