import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userAction";

export type userState = {
  users: [];
  pending: boolean;
  error: boolean;
};

const initialState: userState = {
  users: [],
  pending: false,
  error: false,
};

export const userSlice = createSlice({
  name: "users",

  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.users = payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default userSlice.reducer;
