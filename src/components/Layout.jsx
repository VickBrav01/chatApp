import { Layout } from "antd";
import ScrollToBottom from "react-scroll-to-bottom";
import Sidebar from "../components/Sidebar";
import Headerr from "../components/Header";
import ChatWindow from "./Chatwindow";



const { Content } = Layout;

const Display = () => {
    return (
        <Layout style={{ margin: "0" }}>
            <Headerr />
            <Layout>
                <Sidebar />
                <ScrollToBottom>

                    <ChatWindow />

                </ScrollToBottom>
            </Layout>
        </Layout>
    )
}

export default Display