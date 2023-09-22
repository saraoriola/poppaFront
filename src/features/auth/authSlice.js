import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// NOTE: Estoy guardando el role y los eventos que está accediendo el usuario en el local storage. Revisar esto.
const user = JSON.parse(localStorage.getItem("userConnected")) || null;
const userEvents = JSON.parse(localStorage.getItem("userEvents")) || null;
const userRole = JSON.parse(localStorage.getItem("userRole")) || null;
const token = JSON.parse(localStorage.getItem("token")) || null;

const initialState = {
  userConnected: user,
  userEvents: userEvents,
  userRole: userRole,
  token: token,
  users: null,
};

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    return await authService.register(user);
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message); //action.payload
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout();
  } catch (error) {
    console.error(error);
  }
});

// export const changeAvatar = createAsyncThunk("auth/changeAvatar", async (avatar) => {
//     try {
//         return await authService.uploadAvatar(avatar);
//     } catch (error) {
//         console.error(error);
//     }
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.userConnected = action.payload.user;
        state.userEvents = action.payload.user.events;
        state.userRole = action.payload.user.role;
        state.token = action.payload.token;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userConnected = null;
        state.token = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload.message;
      });

    // .addCase(changeAvatar.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    // });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
