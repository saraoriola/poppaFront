import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";

import event from "../features/event/eventsSlice";

export const store = configureStore({
    reducer: {
        auth,

        event,
    },
});
