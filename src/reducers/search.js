import { SET_SEARCH } from '../constants/action-types';

export default function search (state="", action) {
    switch (action.type) {
        case SET_SEARCH:
            return action.payload;
        default:
            return state;
    }
}