import React, { useState } from 'react';
import { Layout } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Message from '../components/Message';

import "./Messeges.css";

const { Content } = Layout;

const Messages = () => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [following, setFollowing] = useState(false);

    const contacts = [
        {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            online: false,
            profileImage: 'https://example.com/profile1.jpg',
            isFollowing: true,
        },
        {
            id: 2,
            name: 'Jane Smith',
            username: 'janesmith',
            online: true,
            profileImage: 'https://example.com/profile2.jpg',
            isFollowing: false,
        },
        // Add more users here...
    ];

    const handleContactClick = (contactId) => {
        setSelectedContact(contactId);
        const selectedContact = contacts.find(contact => contact.id === contactId);
        setFollowing(selectedContact.isFollowing);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmitMessage = () => {
        if (inputValue.trim() !== '') {
            const newMessage = {
                id: Math.floor(Math.random() * 100000), // Generate a unique ID for the message
                content: inputValue,
                senderName: 'Current User',
                senderId: 1, // Replace with the appropriate user ID
                timestamp: new Date().toLocaleString(),
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setInputValue('');
        }
    };

    const handleFollow = () => {
        setFollowing(true);
        // Perform API call or Redux dispatch to update follow status in the backend
    };

    const handleUnfollow = () => {
        setFollowing(false);
        // Perform API call or Redux dispatch to update follow status in the backend
    };

    return (
        <Layout style={{ margin: '0' }}>
            <Header />
            <Layout>
                <Sidebar users={contacts} onUserClick={handleContactClick} />

                <Content style={{ margin: '24px', overflow: 'initial' }}>
                    <div className="messages-container">
                        <div className="contacts">
                            {contacts.map((contact) => (
                                <div
                                    key={contact.id}
                                    className={`contact ${selectedContact === contact.id ? "selected" : ""}`}
                                    onClick={() => handleContactClick(contact.id)}
                                >
                                    <div className="profile" />
                                    <div className="contact-info">
                                        <div>

                                            <h2>{contact.name}</h2>
                                            <p>{contact.online ? "Online" : "Offline"}</p>
                                        </div>
                                        {selectedContact === contact.id && (
                                            <button onClick={following ? handleUnfollow : handleFollow}>
                                                {following ? 'Unfollow' : 'Follow'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="conversation-area">
                            {selectedContact ? (
                                <div className="conversation">
                                    <div className="conversation-header">
                                        <div className="profile" />
                                        <div className="contact-info">
                                            <h2>{contacts[selectedContact - 1].name}</h2>
                                            <p>{contacts[selectedContact - 1].online ? "Online" : "Offline"}</p>
                                        </div>
                                    </div>
                                    <ScrollToBottom>
                                        <div className="chat-area">
                                            <div className="messages">

                                                {messages.map((message) => (
                                                    <Message key={message.id} message={message} isCurrentUser={message.senderId === 1} />
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollToBottom>
                                    <div className="input-area">
                                        <input
                                            type="text"
                                            placeholder="Type your message..."
                                            value={inputValue}
                                            onChange={handleInputChange}
                                        />
                                        <button onClick={handleSubmitMessage}>Send</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="no-contact">Select a contact to start a conversation</div>
                            )}
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Messages;
