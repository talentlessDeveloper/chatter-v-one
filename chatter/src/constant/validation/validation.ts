import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin, ISignUp } from "./types";

export const loginDefaultValues: ILogin = {
  email: "",
  password: "",
};

const loginSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(15).required("Password is required"),
});

export const loginResolver = yupResolver(loginSchema);

export const registerDefaultValues: ISignUp = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  role: "",
};

const registerSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(4).max(15).required("Password is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "password must match")
    .required("Please Confirm Your Password"),
});

export const registerResolver = yupResolver(registerSchema);
