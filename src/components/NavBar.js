import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Header>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => navigate('/home')}>
                    Home
                </Menu.Item>
                <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => navigate('/profile')}>
                    Profile
                </Menu.Item>
                <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => navigate('/settings')}>
                    Settings
                </Menu.Item>
            </Menu>
        </Header>
    );
};

export default NavBar;
