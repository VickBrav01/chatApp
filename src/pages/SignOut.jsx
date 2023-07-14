import React, { useState } from 'react';
import { Modal } from 'antd';
import { Layout } from 'antd';
import ScrollToBottom from 'react-scroll-to-bottom';
import Sidebar from '../components/Sidebar';
import Headerr from '../components/Header';

const { Content } = Layout;

const SignOut = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Confirm Log Out?');

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('Confirm Log Out?');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Layout style={{ margin: '0' }}>
            <Headerr />
            <Layout>
                <Sidebar onSignOut={showModal} />
                <ScrollToBottom>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <Modal
                            title="Log Out"
                            visible={open}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <p>{modalText}</p>
                        </Modal>
                    </Content>
                </ScrollToBottom>
            </Layout>
        </Layout>
    );
};

export default SignOut;
