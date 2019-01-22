import { SET_SELECTED_EVENT } from '../constants/action-types';

export default function selectedEvent (state="", action) {
    switch (action.type) {
        case SET_SELECTED_EVENT:
            return action.payload;
        default:
            return state;
    }
}