import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (userName: string) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_GITHUB_URL}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
      params: {
        q: userName,
      },
    });

    return response.data.items;
  }
);
