import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  events: [],
  isLoading: false,
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
    builder
      .addCase(getAllEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllEvents.fulfilled, (state, action) => {
        state.events = action.payload.events;
        state.isLoading = false;
      })
      .addCase(getEventByTitle.fulfilled, (state, action) => {
        state.events = action.payload.events;
      });
  },
});

export default eventSlice.reducer;