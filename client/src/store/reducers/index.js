import { combineReducers } from "redux";
import authReducer from "./authRedeucer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
  auth: authReducer,
  loader: loaderReducer,
});
