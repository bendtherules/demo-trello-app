import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../storeSlices/boardSlice";
import { saveState } from "../utils/persistStateUtils";

const store = configureStore({
  reducer: {
    board: boardReducer
  }
});

// Save state in localStorage, on save
// Loading code in reducers
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
