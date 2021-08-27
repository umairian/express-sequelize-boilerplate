import { DISPLAY_LOADER, HIDE_LOADER } from "../types";

export const displayLoader = () => async (dispatch) => {
  dispatch({
    type: DISPLAY_LOADER,
  });
};

export const hideLoader = () => async (dispatch) => {
  dispatch({
    type: HIDE_LOADER,
  });
};
