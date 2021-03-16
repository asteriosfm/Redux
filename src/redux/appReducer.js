import { HIDE_LOADER, SHOW_LOADER } from "./types";


const initialState = {
  loader: false,
};

export const appReducer = (state=initialState, action) => {
  switch(action.type) {
    case HIDE_LOADER:
      return {
        ...state,
        loader: false
      }
    case SHOW_LOADER:
      return {
        ...state,
        loader: true
      }
    default: return state
  }
}
