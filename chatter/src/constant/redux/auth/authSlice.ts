import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type IauthState = {
  loading: boolean;
  password: string;
  email: string;
  isLoggedIn: boolean;
};

const initialState: IauthState = {
  loading: false,
  password: "",
  email: "",
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin(state: IauthState, { payload }: PayloadAction<boolean>) {
      state.loading = true;
    },
  },
});

export const { setIsLogin } = authSlice.actions;
export default authSlice.reducer;
