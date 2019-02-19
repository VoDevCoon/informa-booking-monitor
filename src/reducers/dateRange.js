import { SET_DATE_RANGE } from  '../constants/action-types';

export default function dateRange (state={"range": 0, "dateRangeSelector": "weekly"}, action){
    switch (action.type) {
        case SET_DATE_RANGE:
            state = {...state, ...action.payload};
            console.log(`in reducer: ${JSON.stringify(state)}`);
            return state;
        default:
            return state
    }
}