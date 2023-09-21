import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  events: null,
};

export const getAllEvents = createAsyncThunk("event/getAllEvents", async () => {
  try {
    return await eventService.getAllEvents();
  } catch (error) {
    console.error(error);
  }
});

export const getEventByTitle = createAsyncThunk(
  "event/getEventByTitle",
  async (title) => {
    try {
      return await eventService.getEventByTitle(title);
    } catch (error) {
      console.error(error);
    }
  }
);

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventByTitle.fulfilled, (state, action) => {
      state.events = action.payload;
    });
  },
});

export default eventSlice.reducer;
