import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import location from "../features/location/locationSlice";
import dashboards from "../features/dashboards/dashboardsSlice";

export const store = configureStore({
    reducer: {
        auth,
        //event,
        location,
        dashboards,
    },
});
