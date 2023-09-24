import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardsService from './dashboardsService';

const initialState = {
  events: [],
  event:{},
};

export const dashboardsSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventById.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
  },
});

export const getEventById = createAsyncThunk('dashboards/getEventById', async (id) => {
  try {
    return await dashboardsService.getEventById(id);
  } catch (error) {
    console.error(error);
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
}
});

export default dashboardsSlice.reducer;
