import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        auth,
        //event,
    },
});
