import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventsService";

const initialState = {};

export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createEvent.fulfilled, (state, action) => {}).addCase(createEvent.rejected, (state, action) => {});
    },
});

export const createEvent = createAsyncThunk("event/createEvent", async (eventData) => {
    try {
        return await eventService.createEvent(eventData);
    } catch (error) {
        console.error(error);
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
    }
});

export default eventSlice.reducer;
