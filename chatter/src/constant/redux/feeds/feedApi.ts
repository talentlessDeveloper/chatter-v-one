import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../https/config";
import { httpRequest } from "../../https/httpsRequest";
import { IcreateFeeds } from "../../validation/types";

export const getAllFeeds = createAsyncThunk(
  "feeds/get-feeds",
  async (id, { fulfillWithValue, rejectWithValue }) => {
    try {
      const result = await httpRequest({
        BASE_URL: BASE_URL,
        url: "post",
        method: "GET",
      });
      console.log(result, "result");
      if (result.status === "error") {
        return rejectWithValue(result.message);
      }
      return fulfillWithValue(result);
    } catch (e) {
      console.log(e);
    }
  }
);

export const createFeeds = createAsyncThunk(
  "feeds/create-feed",
  async (data: IcreateFeeds, { fulfillWithValue, rejectWithValue }) => {
    try {
      const result = await httpRequest({
        BASE_URL: BASE_URL,
        url: "post",
        method: "POST",
        body: data,
      });
      console.log(result, "result");
      if (result.status === "error") {
        return rejectWithValue(result.message);
      }
      return fulfillWithValue(result);
    } catch (e) {
      console.log(e);
    }
  }
);
