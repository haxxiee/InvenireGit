import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserRepos = createAsyncThunk(
  "repos/getUserRepos",
  async (userName: string) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_GITHUB_URL}/users/${userName}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
        params: {
          sort: "created",
          per_page: 10,
        },
      }
    );

    return response.data;
  }
);
