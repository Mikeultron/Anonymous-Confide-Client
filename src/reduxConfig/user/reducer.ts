import actionTypes from "reduxConfig/actionTypes";
import { UserActionTypes } from "./types";

export interface IUserState {
  authState: boolean;
}

const initialState: IUserState = {
  authState: false,
};

export const userReducer = (
  state: IUserState = initialState,
  action: UserActionTypes
) => {
  switch (action.type) {
    case actionTypes.userActionTypes.SET_AUTH_STATUS:
      return {
        ...state,
        authState: action.payload,
      };
    default:
      return state;
  }
};
