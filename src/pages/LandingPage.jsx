import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import connected from "../images/online-wishes-animate.svg";
import { Spin } from "antd";
import logo from "../images/logo1.png";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000); // Change the duration (in milliseconds) to your desired time

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="landing-page-content">
      <img
        src={connected}
        alt="Landing page image"
        className="landing-page-image"
      />
      <img src={logo} alt="logo" className="landing-page-logo" />
      <div className="spin-container">
        <Spin size="medium" />
      </div>
    </div>
  );
};

export default LandingPage;
