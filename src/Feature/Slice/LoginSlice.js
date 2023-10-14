import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "Login",
  initialState: {
    logined: localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : null,
  },
  reducers: {
    loginusers: (state, action) => {
      state.logined = action.payload;
    },
  },
});

export const { loginusers } = userSlice.actions;
export default userSlice.reducer;
