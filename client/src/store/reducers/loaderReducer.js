import { DISPLAY_LOADER, HIDE_LOADER } from "../types";

const initial = false;

export default (state = initial, action) => {
  switch (action.type) {
    case DISPLAY_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
};
