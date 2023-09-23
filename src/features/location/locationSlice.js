import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import locationService from "./locationService";


const initialState = {
  locations: [],
};
export const get = createAsyncThunk("locations/getbyid", async (id) => {
  try {
    return await locationService.getLocationById(id)
  } catch (error) {
    console.error(error)
  }
});

export const locationCreate = createAsyncThunk("locations/create", async (formData) => {
  try {
    return await locationService.createLocation(formData);
  } catch (error) {
    console.error(error);
  }
});

export const Delete = createAsyncThunk("locations/delete", async (id) => {
  try {
    return await locationService.deleteLocation(id);
  } catch (error) {
    console.error(error);
  }
});




export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(get.fulfilled, (state, action) => {
      state.locations = action.payload;
    })
    builder.addCase(locationCreate.fulfilled, (state, action) => {
      state.locations = action.payload;
    });
    builder.addCase(Delete.fulfilled, (state, action ) => {
      state.locations = action.payload;
    });
  },

});

export default locationSlice.reducer;