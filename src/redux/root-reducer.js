import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { authApi, employeeApi } from "./services";

import tabsReducer, { persistConfig } from "./slices/tabs";
import modalReducer from "./modal/modalRedux";

export const reducers = combineReducers({
  tabsReducer: persistReducer(persistConfig, tabsReducer),
  [authApi.reducerPath]: authApi.reducer,
  [employeeApi.reducerPath]: employeeApi.reducer,
  modalReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    localStorage.clear();
    return state;
  }
  return reducers(state, action);
};
