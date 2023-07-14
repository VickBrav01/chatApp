import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, selectMessages } from "../Redux/slices/chatSlice";
import { selectCurrentUser } from "../Redux/slices/userSlice";
import Message from "./Message";
import "./ChatWindow.css";
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatWindow = ({ contact }) => {
    const [messageText, setMessageText] = useState("");
    const dispatch = useDispatch();
    const messages = useSelector(selectMessages);
    const currentUser = useSelector(selectCurrentUser);
    const chatAreaRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleMessageSend = () => {
        if (messageText.trim() !== "") {
            const newMessage = {
                id: messages.length + 1,
                content: messageText,
                senderName: currentUser.name,
                senderId: currentUser.id,
                timestamp: new Date().toLocaleString(),
            };
            dispatch(addMessage(newMessage));
            setMessageText("");
        }
    };

    const scrollToBottom = () => {
        if (chatAreaRef.current) {
            chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
        }
    };

    return (
        <div className="chat-window">
            <ScrollToBottom className="messages-container">
                <div className="chat-area" ref={chatAreaRef}>
                    {messages.map((message) => (
                        <Message
                            key={message.id}
                            message={message}
                            isCurrentUser={message.senderId === currentUser.id}
                        />
                    ))}
                </div>
            </ScrollToBottom>
            <div className="chat-input">
                <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    className="input-field"
                />
                <button className="send-button" onClick={handleMessageSend}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatWindow;
