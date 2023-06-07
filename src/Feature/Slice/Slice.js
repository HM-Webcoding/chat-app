import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "Login",
    initialState: {
        logined: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : null
    },
    reducers: {
        loginUsers: (state, action)=>{
            state.logined = action.payload;
            console.log(action.payload);
        }
    }
})

const {loginUsers} = userSlice.actions
export default userSlice.reducer