import { configureStore } from "@reduxjs/toolkit";
import autSlice from "../Slice/Slice";

const store = configureStore({
    reducer: {
        logIn: autSlice
    }
})

export default store 