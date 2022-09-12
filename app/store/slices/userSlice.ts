import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const userSlice = createSlice({
  name: "users",

  initialState: {
    users: [
      {
        name: "Banan",
        lastname: "Svennne",
      },
    ],
  },

  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // TODO - handle client side state override
      state.users = action.payload.users.users;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
