import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

