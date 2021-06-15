import actionTypes from "reduxConfig/actionTypes";
import { SetAuthState, SetUser } from "./types";

export const setAuthState = (payload: boolean): SetAuthState => ({
  type: actionTypes.userActionTypes.SET_AUTH_STATUS,
  payload,
});

export const setUser = (payload: boolean): SetUser => ({
  type: actionTypes.userActionTypes.SET_USER,
  payload,
});
