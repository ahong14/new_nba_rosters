import { UPDATE_TEAMS } from '../actions';
import { TeamsInterface } from '../../interfaces/interfaces';

const initialTeamsState: TeamsState = {
    teams: []
};

export type TeamsState = {
    teams: Array<TeamsInterface>
}

type TeamsAction = {
    type: string,
    teams: Array<TeamsInterface>
}

const reducer = (state: TeamsState = initialTeamsState, action: TeamsAction) => {
    switch (action.type) {
        case UPDATE_TEAMS:
            return {
                ...state,
                teams: [...action.teams]
            }
        
        default:
            return state;
    }
}

export default reducer;