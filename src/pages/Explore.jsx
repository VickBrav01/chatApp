import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Layout, Row, Col } from 'antd';
import SearchBar from '../components/SearchBar';
import PeopleSuggestions from '../components/PeopleSuggestion';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Explore.css';

const { Content } = Layout;

const Explore = () => {
    return (
        <Layout style={{ margin: '0' }}>
            <Header />
            <Layout>
                <Sidebar />
                <ScrollToBottom>
                    <Content style={{ padding: '20px' }}>
                        <Row gutter={[16, 16]}>
                            <Col span={16}>
                                <div className="explore-main">
                                    <div className="search-container">
                                        <SearchBar />
                                    </div>
                                    <div className="main-content">
                                        {/* Your main content goes here */}
                                        <h2>Main Content</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="suggestions-container">
                                    <h2 className="suggestions-title">People Suggestions</h2>
                                    <div className="people-suggestions">
                                        <PeopleSuggestions />
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Content>
                </ScrollToBottom>
            </Layout>
        </Layout>
    );
};

export default Explore;

