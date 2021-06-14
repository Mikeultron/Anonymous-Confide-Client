import actionTypes from "reduxConfig/actionTypes";
import { SetAuthState } from "./types";

export const setAuthState = (payload: boolean): SetAuthState => ({
  type: actionTypes.userActionTypes.SET_AUTH_STATUS,
  payload,
});
