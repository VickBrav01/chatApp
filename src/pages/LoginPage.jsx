import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import login from "../images/mobile-login-animate.svg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./LoginPage.css";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    navigate("/home");
    // Perform your desired action with the form data
    console.log("Form data:", data);

    // Set the user as authenticated
    // setIsAuthenticated(true);
  };

  return (
    <div className="container">
      <div className="container-left">
        <img src={login} alt="login image" className="login-image" />

        <div className="content">
          <h2>Find Friends & Get Inspiration</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            ipsum alias facilis illum praesentium quo cum qui? Error officiis
            facilis quaerat magnam assumenda vel autem, dolorem nulla. Fugiat,
            aut architecto!
          </p>
        </div>
      </div>
      <div className="container-right">
        <h2>LOGIN</h2>

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email address:</label>
            <input
              type="email"
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" className="btn-login">
            Submit
          </button>
          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
