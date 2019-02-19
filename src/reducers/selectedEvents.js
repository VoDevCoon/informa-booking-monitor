import { TOGGLE_SELECTED_EVENTS, LOAD_SELECTED_EVENTS } from '../constants/action-types';

export default function selectedEvents(state=[], action) {
    switch (action.type) {
        case TOGGLE_SELECTED_EVENTS:
            const index = state.indexOf(action.payload);
            if (index < 0){
                return [
                    ...state,
                    action.payload
                ];
            }
            else {
                return state.filter((_, i) => i !== index);
            }
        
        case LOAD_SELECTED_EVENTS:
            return action.payload;
        default:
            return state;
    }
}