import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import location from "../features/location/locationSlice";

export const store = configureStore({
    reducer: {
        auth,
        //event,
        location
    },
});
