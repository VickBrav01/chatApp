import React from 'react'
import Headerr from '../components/Header'
import UserProfile from '../components/UserProfile/UserProfile';
import Sidebar from '../components/Sidebar'
import { Layout } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import UserList from '../components/UserList';


const { Content } = Layout;


const Profile = () => {
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
                        <UserProfile />

                        {/* <UserList /> */}
                    </Content>
                </ScrollToBottom>
            </Layout>
        </Layout>
    )
}

export default Profile