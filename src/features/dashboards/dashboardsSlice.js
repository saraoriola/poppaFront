import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardsService from './dashboardsService'; 

const initialState = {
  events: [],
  event: {}
};

export const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(getEventById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.event = action.payload;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
});

export const getEventById = createAsyncThunk('dashboards/getEventById', async (id) => {
    try {
      return await dashboardsService.getEventById(id);
    } catch (error) {
      console.error();
    }
  });

export default dashboardsSlice.reducer;
