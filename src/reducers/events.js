import {  
    LOAD_EVENTS_SUCCESS
} from '../constants/action-types';

export default function events(state={}, action) {
    switch (action.type) {
        case LOAD_EVENTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }

}