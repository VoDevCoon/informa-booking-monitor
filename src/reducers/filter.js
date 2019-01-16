import { SET_FILTER } from '../constants/action-types';

export default function filter(state="all", action) {
    switch (action.type) {
        case SET_FILTER:
            return action.payload;
        default:
            return state;
    }
}