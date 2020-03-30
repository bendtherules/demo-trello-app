import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "../storeSlices/boardSlice";

export default configureStore({
  reducer: {
    board: boardReducer
  }
});
