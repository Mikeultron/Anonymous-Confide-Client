import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import actionTypes from "./actionTypes";

// Imports Reducer
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export { store, actionTypes };

// Exports Actions
export * from "./user/actions";
