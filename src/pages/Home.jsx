import { useState } from "react";
import { Layout, Menu } from "antd";
import logo from "../images/logo2.png";
import {
  FaUser,
  FaSignOutAlt,
  FaSearch,
  FaHeart,
  FaRegPaperPlane,
  FaRegBell,
  FaThumbsDown,
  FaThumbsUp,
  FaTrash,
  FaHome,
  FaRegComment,
} from "react-icons/fa";

const { Header, Content, Sider } = Layout;
function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem("Home", "1", <FaHome />),
  getItem("Profile", "2", <FaUser />),
  getItem("Explore", "3", <FaSearch />),
  getItem("Messages", "4", <FaRegPaperPlane />),
  getItem("Notification", "5", <FaRegBell />),
  getItem("Sign Out", "6", <FaSignOutAlt />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ margin: "0" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "#0D65D9",
        }}
      >
        <img src={logo} alt="logo" width="100px" />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items}
          />
        </Sider>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <p>long content</p>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
