import { login } from "../../services/login";

import {
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../types";

export const signIn = (body) => async (dispatch) => {
  try {
    const { data } = await login(body);

    if (data?.message?.length) {
      alert(data.message);
      return;
    }
    dispatch({
      type: SET_CURRENT_USER,
      user: data.user,
      accessToken: data.id_token,
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const updateCurrentUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CURRENT_USER,
      user,
    });
  } catch (error) {
    return error;
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT_CURRENT_USER,
    });
  } catch (error) {
    return error;
  }
};
