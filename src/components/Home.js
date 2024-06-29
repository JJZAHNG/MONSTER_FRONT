import React from 'react';
import { Layout, Menu, Card, Typography, Avatar, List, Button } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;
const { Title, Text } = Typography;

const userData = {
  username: 'ADMIN',
  phone_number: '15105187807',
  membership_level: 'Senior Ultra',
  points: 1200,
};

const features = [
  { title: 'Skill Training', icon: <LaptopOutlined />, link: '/courses' },
  { title: 'Live Classes', icon: <VideoCameraOutlined />, link: '/live' },
  { title: 'Online Store', icon: <ShoppingOutlined />, link: '/store' },
  { title: 'Notifications', icon: <NotificationOutlined />, link: '/notifications' },
];

const courseData = [
  { title: 'Skill Training 1', description: 'Introductory level training' },
  { title: 'Skill Training 2', description: 'Advanced level training' },
  { title: 'Camp 1', description: 'Summer camp activities' },
  { title: 'Camp 2', description: 'Winter camp activities' },
];

const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => window.location.href = '/home'}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => window.location.href = '/profile'}>Profile</Menu.Item>
          <Menu.Item key="3" onClick={() => window.location.href = '/settings'}>Settings</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />} onClick={() => window.location.href = '/home'}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />} onClick={() => window.location.href = '/courses'}>
              Courses
            </Menu.Item>
            <Menu.Item key="3" icon={<VideoCameraOutlined />} onClick={() => window.location.href = '/live'}>
              Live Classes
            </Menu.Item>
            <Menu.Item key="4" icon={<ShoppingOutlined />} onClick={() => window.location.href = '/store'}>
              Store
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Card style={{ marginBottom: 24, textAlign: 'center' }}>
              <Avatar size={64} icon={<UserOutlined />} />
              <Title level={2}>Welcome, {userData.username}!</Title>
              <Text>Phone: {userData.phone_number}</Text><br />
              <Text>Membership: {userData.membership_level}</Text><br />
              <Text>Points: {userData.points}</Text>
            </Card>
            <Card title="Available Features" style={{ marginBottom: 24 }}>
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={features}
                renderItem={item => (
                  <List.Item>
                    <Card
                      hoverable
                      onClick={() => window.location.href = item.link}
                    >
                      {item.icon}
                      <br />
                      <Text>{item.title}</Text>
                    </Card>
                  </List.Item>
                )}
              />
            </Card>
            <Card title="Your Courses">
              <List
                itemLayout="horizontal"
                dataSource={courseData}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description={item.description}
                    />
                    <Button type="primary">View</Button>
                  </List.Item>
                )}
              />
            </Card>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Monster System ©2024 Created by You
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
