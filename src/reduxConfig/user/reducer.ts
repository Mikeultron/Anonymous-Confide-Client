import actionTypes from "reduxConfig/actionTypes";
import { UserActionTypes } from "./types";

export interface IUserState {
  authState: boolean;
  user: any;
}

const initialState: IUserState = {
  authState: false,
  user: {},
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
    case actionTypes.userActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
