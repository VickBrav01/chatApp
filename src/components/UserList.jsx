import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, List, Modal } from "antd";
import { FaRegUser, FaUserCheck } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import ChatWindow from "./Chatwindow";
import { followUser, unfollowUser, selectCurrentUser, openChatWindow, closeChatWindow } from "../Redux/slices/userSlice";

const UserList = () => {
    const users = useSelector((state) => state.users.users);
    const selectedUser = useSelector((state) => state.users.selectedUser);
    const chatVisible = useSelector((state) => state.users.chatVisible);
    const dispatch = useDispatch();

    const handleFollow = (userId) => {
        dispatch(followUser(userId));
    };

    const handleUnfollow = (userId) => {
        dispatch(unfollowUser(userId));
    };

    const handleUserClick = (user) => {
        dispatch(selectCurrentUser(user)); // Dispatch an action to set the selected user
        dispatch(openChatWindow()); // Dispatch an action to open the chat window
    };

    const handleCloseChat = () => {
        dispatch(selectCurrentUser(null)); // Dispatch an action to clear the selected user
        dispatch(closeChatWindow()); // Dispatch an action to close the chat window
    };

    return (
        <>
            <List
                dataSource={users}
                renderItem={(user) => (
                    <List.Item
                        key={user.id}
                        actions={[
                            user.following ? (
                                <Button disabled>
                                    <FaUserCheck /> Following
                                </Button>
                            ) : (
                                <Button onClick={() => handleFollow(user.id)}>
                                    <FaRegUser /> Follow
                                </Button>
                            ),
                        ]}
                        onClick={() => handleUserClick(user)}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={user.profileImage} />}
                            title={user.name}
                        />
                    </List.Item>
                )}
            />

            <Modal
                visible={chatVisible}
                title={selectedUser && selectedUser.name}
                onCancel={handleCloseChat}
                footer={[
                    <Button key="close" onClick={handleCloseChat}>
                        <AiOutlineCloseCircle /> Close
                    </Button>,
                ]}
            >
                {selectedUser && <ChatWindow user={selectedUser} />}
            </Modal>
        </>
    );
};

export default UserList;
