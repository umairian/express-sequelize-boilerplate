import {
  SET_CURRENT_USER,
  UPDATE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../types";
import isEmpty from "lodash/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  accessToken: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
        accessToken: action.accessToken,
      };

    case UPDATE_CURRENT_USER:
      return {
        ...state,
        user: { ...state.user, ...action.user },
      };

    case LOGOUT_CURRENT_USER:
      return initialState;

    default:
      return state;
  }
};
