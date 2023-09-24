import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardsService from './dashboardsService'; 

const initialState = {
  events: [],
};

export const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {},
});

export const getEventById = createAsyncThunk('dashboards/getEventById', async (id) => {
    try {
      return await dashboardsService.getEventById(id);
    } catch (error) {
      console.error();
    }
  });

export default dashboardsSlice.reducer;
