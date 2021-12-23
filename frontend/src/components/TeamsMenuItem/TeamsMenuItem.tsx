import { MenuItem, Image, Text } from '@chakra-ui/react';
import { TeamsInterface } from '../../interfaces/interfaces';
import { Link } from 'react-router-dom';

const TeamsMenuItem = (props: TeamsInterface) => {
    return (
        <MenuItem bg="white">
            <Link to={`/teams/${props.tid}`}>
                <Image
                    src={props.imgURLSmall}
                    borderRadius="full"
                    boxSize="100px"
                    alt="Team Logo"
                />
                <Text color="black" align="center">
                    {props.region} {props.name}
                </Text>
            </Link>
        </MenuItem>
    );
};

export default TeamsMenuItem;
