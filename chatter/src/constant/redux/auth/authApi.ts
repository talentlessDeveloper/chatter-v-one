import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, ISignUp } from "../../validation/types";
import { httpRequest } from "../../https/httpsRequest";
import { BASE_URL } from "../../https/config";

export const login = createAsyncThunk(
  "users/login",
  async (loginData: ILogin, { fulfillWithValue, rejectWithValue }) => {
    try {
      const result = await httpRequest({
        BASE_URL: BASE_URL,
        url: "auth/login",
        method: "POST",
        body: loginData,
        needToken: false,
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
export const register = createAsyncThunk(
  "users/register",
  async (registerData: ISignUp, { fulfillWithValue, rejectWithValue }) => {
    try {
      const result = await httpRequest({
        BASE_URL: BASE_URL,
        url: "auth/signup",
        method: "POST",
        body: registerData,
        needToken: false,
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