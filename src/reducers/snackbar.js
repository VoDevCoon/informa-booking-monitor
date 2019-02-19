import { HIDE_SNACKBAR, SHOW_SNACKBAR } from '../constants/action-types';

const initialState = {
  snackbarOpen: false,
  snackbarMessage: '',
};

export default function snackbarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR:
    case HIDE_SNACKBAR: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}