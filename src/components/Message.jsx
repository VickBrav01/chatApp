import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../Redux/slices/userSlice";

import "./Message.css";

const Message = ({ message, isCurrentUser }) => {
    const currentUser = useSelector(selectCurrentUser);

    return (
        <div className={`message ${isCurrentUser ? "current-user" : ""}`}>
            <p className="message-sender">
                {isCurrentUser ? "You" : message.senderName}
            </p>
            <p className="message-content">{message.content}</p>
            <p className="message-timestamp">{message.timestamp}</p>
        </div>
    );
};

export default Message;
