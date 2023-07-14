import React, { useState } from "react";
import { Input, Button, Space, Tooltip, Layout } from "antd";
import { FaPencilAlt, FaRegImage, FaHeart, FaComment } from "react-icons/fa";
import ScrollToBottom from "react-scroll-to-bottom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./home.css";

const { Content } = Layout;
const { TextArea } = Input;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmitPost = () => {
    if (inputValue.trim() !== "") {
      setPosts([...posts, { text: inputValue, likes: 0, comments: [] }]);
      setInputValue("");
    }
  };

  const handleLikePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likes += 1;
    setPosts(updatedPosts);
  };

  const handleAddComment = (index, comment) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);

  };

  return (
    <Layout style={{ margin: "0" }}>
      <Header />
      <Layout>
        <Sidebar />
        <ScrollToBottom>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className="home">
              <div className="post-input-container">
                <div className="post-picture">
                  <div className="write-post">
                    <div className="icon">
                      <FaPencilAlt />
                    </div>
                    <p>Write a post</p>
                  </div>

                  <div className="upload-post">
                    <div className="icon">
                      <FaRegImage />
                    </div>
                    <p>Upload a photo</p>
                  </div>
                </div>
                <hr />
                <div className="post-text">
                  <TextArea
                    className="post-input"
                    placeholder="Write something here..."
                    value={inputValue}
                    onChange={handleInputChange}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                  />
                  <Button className="submit-button" onClick={handleSubmitPost}>
                    Post
                  </Button>
                </div>
              </div>

              <div className="post-list">
                {posts.map((post, index) => (
                  <div key={index} className="post-item">
                    <div className="post-content">
                      <p>{post.text}</p>
                      <div className="post-actions">
                        <Space>
                          <Tooltip title="Like">
                            <div className="action" onClick={() => handleLikePost(index)}>
                              <FaHeart />
                              <span>{post.likes}</span>
                            </div>
                          </Tooltip>
                          <Tooltip title="Comment">
                            <div className="action">
                              <FaComment />
                              <span>{post.comments.length}</span>
                            </div>
                          </Tooltip>
                        </Space>
                      </div>
                    </div>
                    <div className="comment-section">
                      <input
                        type="text"
                        className="comment-input"
                        placeholder="Add a comment..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleAddComment(index, e.target.value);
                            e.target.value = "";
                          }
                        }}
                      />
                      {post.comments.map((comment, commentIndex) => (
                        <div key={commentIndex} className="comment">
                          {comment}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </Content>
        </ScrollToBottom>
      </Layout>
    </Layout>
  );
};

export default Home;
