import { configureStore } from "@reduxjs/toolkit";
import dataStoreSlice from "./dataStore";
import currentCoin from "./currentStore";
import historyCoin from "./historyCurrentStore";
import stateModal from "./modal_on_off";
import caseStore from "./caseStore";

export const store = configureStore({
  reducer: {
    dataStore: dataStoreSlice,
    currentCoin: currentCoin,
    historyStore: historyCoin,
    stateModal: stateModal,
    caseStore: caseStore,
  },
});
