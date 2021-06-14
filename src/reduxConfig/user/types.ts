import actionTypes from "reduxConfig/actionTypes";

export type SetAuthState = {
  type: typeof actionTypes.userActionTypes.SET_AUTH_STATUS;
  payload: boolean;
};

export type UserActionTypes = SetAuthState;
