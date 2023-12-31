import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardsService from './dashboardsService';

const initialState = {
  events: [],
  loading: false,
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
        state.event = action.payload;
      })
  },
});

export const getEventById = createAsyncThunk('dashboards/getEventById', async (id, thunkAPI) => {
  try {
    return await dashboardsService.getEventById(id);
  } catch (error) {
    console.error(error);
    const message = error.response.data.message;
    throw new Error(message); 
  }
});


export default dashboardsSlice.reducer;
