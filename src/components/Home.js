import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const Home = ({ user }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Home
          </Menu.Item>
          {/* Add more menu items here */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Title level={2}>Welcome, {user.username}!</Title>
            <Text>Your phone number: {user.phone_number}</Text>
            {/* Add more user information here */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Your App ©2024 Created by You</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
