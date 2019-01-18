import { SET_CURRENT_VIEW } from '../constants/action-types';

export default function currentView(state="NewOrdersView", action) {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return action.payload;
        default:
            return state;
    }
}