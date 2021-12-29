const { createSlice } = require("@reduxjs/toolkit");
import { logIn } from "../actions/userAction";

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.isLoggingIn = false;
      state.data = null;
    },
  },
  extraReducers: {
    [logIn.pending]: (state, action) => {
      state.isLoggingIn = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoggingIn = false;
    },
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
