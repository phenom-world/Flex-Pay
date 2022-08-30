import { createSlice } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";

const initialState = {
  employeesTab: "all",
  transactionsTab: "all",
  settingsTab: "personal",
};

export const persistConfig = {
  storage: storageSession,
  key: "root",
};

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    toggleEmployeesTab: (state, action) => {
      state.employeesTab = action.payload;
    },
    toggleTxnsTab: (state, action) => {
      state.transactionsTab = action.payload;
    },
    toggleSettingsTab: (state, action) => {
      state.settingsTab = action.payload;
    },
  },
});

export const { toggleSettingsTab, toggleEmployeesTab, toggleTxnsTab } = tabsSlice.actions;

export default tabsSlice.reducer;
