import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/store";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
