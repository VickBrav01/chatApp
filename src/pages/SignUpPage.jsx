import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import sign from "../images/authentication-animate.svg";
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Invalid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const SignUpPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Perform your desired action with the form data
    console.log("Form data:", data);

    // Set the user as authenticated
    // setIsAuthenticated(true);

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="container-left">
        <img src={sign} alt="login image" className="login-image" />
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
        <h2 className="signup-heading">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label">Name:</label>
            <input
              type="text"
              {...register("name")}
              className={`form-input ${errors.name ? "invalid" : ""}`}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              {...register("email")}
              className={`form-input ${errors.email ? "invalid" : ""}`}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              type="password"
              {...register("password")}
              className={`form-input ${errors.password ? "invalid" : ""}`}
            />
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div>
          <button type="submit" className="signupbutton">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
