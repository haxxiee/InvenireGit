import { createSlice } from "@reduxjs/toolkit";
import { getUserRepos } from "../actions/repoAction";
import { RepoObject } from "../../../types";

export type repoState = {
  repos: RepoObject[];
  pending: boolean;
  error: boolean;
};

const initialState: repoState = {
  repos: [],
  pending: false,
  error: false,
};

export const repoSlice = createSlice({
  name: "repos",

  initialState,
  reducers: {
    removeRepos(state) {
      state.repos = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserRepos.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserRepos.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.repos = payload;
      })
      .addCase(getUserRepos.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const { removeRepos } = repoSlice.actions;
export default repoSlice.reducer;
