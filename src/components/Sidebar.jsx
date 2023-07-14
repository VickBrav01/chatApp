import React from 'react'
import {
    FaUser,
    FaSignOutAlt,
    FaSearch,
    FaRegPaperPlane,
    FaRegBell,
    FaHome,
} from "react-icons/fa";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";




const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    function getItem(label, key, icon, path) {
        return {
            key,
            icon,
            label,
            path,
        };
    }

    const items = [
        getItem("Home", "1", <FaHome />, "/home"),
        getItem("Profile", "2", <FaUser />, "/profile"),
        getItem("Explore", "3", <FaSearch />, "/explore"),
        getItem("Messages", "4", <FaRegPaperPlane />, "/messages"),
        getItem("Notification", "5", <FaRegBell />, "/notifications"),
        getItem("Sign Out", "6", <FaSignOutAlt />, "/signout"),
    ];
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
        >
            <Menu
                mode="inline"
                // defaultSelectedKeys={["1"]}
                style={{
                    height: "100%",
                    borderRight: 0,
                }}
            >
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.path}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    )
}

export default Sidebar