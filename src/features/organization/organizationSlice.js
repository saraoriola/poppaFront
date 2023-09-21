import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import organizationService from "./organizationService";

const initialState = {
  organizations: [],
};

export const getOrganizations = createAsyncThunk(
  "organization/getOrganizations",
  async () => {
    try {
      return await organizationService.getOrganizations();
    } catch (error) {
      console.error(error);
    }
  }
);

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrganizations.fulfilled, (state, action) => {
      state.organizations = action.payload;
    });
  },
});

export default productsSlice.reducer;
