import { createSlice } from "@reduxjs/toolkit";

type authType = {
  isLoggedIn: boolean;
};

const initialState: authType = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = true;
    },
    loggedOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const { loggedIn, loggedOut } = authSlice.actions;
