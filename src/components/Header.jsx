import React from "react";
import { Header } from "antd/es/layout/layout";
import logo from "../images/logo2.png";

const Headerr = () => {
    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                background: "#0D65D9",
            }}
        >
            <img src={logo} alt="logo" width="100px" />
        </Header>
    );
};

export default Headerr;
