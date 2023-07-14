import React from 'react'
import { Layout } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import Sidebar from "../components/Sidebar";
import Headerr from "../components/Header";


const { Content } = Layout;


const Notifications = () => {
    return (
        <Layout style={{ margin: "0" }}>
            <Headerr />
            <Layout>
                <Sidebar />
                <ScrollToBottom>

                    <Content
                        style={{
                            margin: "24px 16px 0",
                            overflow: "initial",
                        }}
                    >
                        profiele

                    </Content>
                </ScrollToBottom>
            </Layout>
        </Layout>
    )
}

export default Notifications