import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventService from "./eventService";

const initialState = {
  events: [],
  event: {},
  isLoading: false,
};

export const getAllEvents = createAsyncThunk("event/getAllEvents", async () => {
  try {
    return await eventService.getAllEvents();
  } catch (error) {
    console.error(error);
  }
});

export const getEventById = createAsyncThunk(
  "event/getEventById",
  async (id) => {
    try {
      return await eventService.getEventById(id);
    } catch (error) {
      console.error(error);
    }
  }
);

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
      .addCase(getEventById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.event = action.payload.event;
        state.isLoading = false;
      })
      .addCase(getEventByTitle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEventByTitle.fulfilled, (state, action) => {
        state.events = action.payload.events;
        state.isLoading = false;
      });
  },
});

export default eventSlice.reducer;
