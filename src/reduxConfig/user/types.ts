import actionTypes from "reduxConfig/actionTypes";

export type SetAuthState = {
  type: typeof actionTypes.userActionTypes.SET_AUTH_STATUS;
  payload: boolean;
};

export type SetUser = {
  type: typeof actionTypes.userActionTypes.SET_USER;
  payload: any;
};

export type UserActionTypes = SetAuthState | SetUser;
