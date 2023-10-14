import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Slice/LoginSlice";

const store = configureStore({
  reducer: {
    logIn: authSlice,
  },
});

export default store;
