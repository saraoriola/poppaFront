import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardsService from './dashboardsService';

const initialState = {
  events: [],
  event: {},
  location: {
    capacity: null,
  },
  attendees: {
    registered: null,
    confirmed: null,
    present: null,
  },
  loading: false,
  error: null,
};

export const getEventById = createAsyncThunk('dashboards/getEventById', async (id) => {
  try {
    return await dashboardsService.getEventById(id);
  } catch (error) {
    console.error(error);
  }
});

export const getAttendees = createAsyncThunk('dashboards/getAttendees', async (id) => {
  try {
    return await dashboardsService.getAttendees(id);
  } catch (error) {
    console.error(error);
  }
});

export const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload;
      })
      .addCase(getAttendees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAttendees.fulfilled, (state, action) => {
        state.loading = false;
        state.attendees = action.payload;
      });
  },
});

export default dashboardsSlice.reducer;
