import {
    Box,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow
} from '@chakra-ui/react';
import { PlayerInterface } from '../../interfaces/interfaces';

const Player = (props: PlayerInterface) => {
    const calculateFeetInchesFromInches = (inches: number) => {
        if (inches <= 0) {
            return '';
        }
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        return `${feet}'${remainingInches}"`;
    };

    const playerAwards = (props.awards || []).map((award) => {
        return (
            <Text>
                <strong> Season: </strong>
                {award.season} <strong> Type: </strong> {award.type}
            </Text>
        );
    });
    return (
        <Container
            flexDirection="column"
            alignSelf="center"
            border="solid 1px black"
            borderRadius="30px"
            w="70%"
            maxW="xlg"
        >
            <Stack direction="row" spacing="24px" height="350px">
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
                        <strong> Height:</strong>{' '}
                        {calculateFeetInchesFromInches(props.hgt)}
                    </Text>
                    <Text>
                        <strong> Weight:</strong> {props.weight}
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
                    <Stack>
                        <Popover>
                            <PopoverTrigger>
                                <Button size="lg" colorScheme="blue">
                                    View Ratings
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverHeader>
                                    <Text fontWeight="bold">
                                        {' '}
                                        Player Ratings
                                    </Text>
                                </PopoverHeader>
                                <PopoverBody>
                                    <Text>
                                        Defensive IQ: {props.ratings[0].diq}
                                    </Text>
                                    <Text> Dunk: {props.ratings[0].dnk}</Text>
                                    <Text>
                                        {' '}
                                        Endurance: {props.ratings[0].endu}
                                    </Text>
                                    <Text>
                                        {' '}
                                        Field Goal: {props.ratings[0].fg}
                                    </Text>
                                    <Text>
                                        {' '}
                                        Free Throw: {props.ratings[0].ft}
                                    </Text>
                                    <Text>
                                        {' '}
                                        Three Point: {props.ratings[0].tp}
                                    </Text>
                                    <Text> Inside: {props.ratings[0].ins}</Text>
                                    <Text> Jump: {props.ratings[0].jmp}</Text>
                                    <Text>
                                        Offensive IQ: {props.ratings[0].oiq}
                                    </Text>
                                    <Text>
                                        {' '}
                                        Rebound: {props.ratings[0].reb}
                                    </Text>
                                    <Text> Speed: {props.ratings[0].spd}</Text>
                                    <Text>
                                        {' '}
                                        Strength: {props.ratings[0].stre}
                                    </Text>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>

                        {props.awards && props.awards.length > 0 ? (
                            <Popover>
                                <PopoverTrigger>
                                    <Button> View Awards</Button>
                                </PopoverTrigger>
                                <PopoverContent
                                    maxHeight="300px"
                                    overflow="auto"
                                >
                                    <PopoverArrow />
                                    <PopoverHeader>
                                        <Text fontWeight="bold">
                                            Player Awards
                                        </Text>
                                    </PopoverHeader>
                                    <PopoverBody>{playerAwards}</PopoverBody>
                                </PopoverContent>
                            </Popover>
                        ) : (
                            ''
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default Player;
