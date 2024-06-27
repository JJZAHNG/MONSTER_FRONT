import React from 'react';
import { Layout, Menu, Avatar, Typography, Card, List } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;
const { Title, Text } = Typography;

const userData = {
  username: 'ADMIN',
  phone_number: '15105187807',
  membership_level: 'Senior Ultra',
};

const courseData = [
  {
    title: 'Skill Training 1',
    description: 'Description of skill training course 1',
  },
  {
    title: 'Skill Training 2',
    description: 'Description of skill training course 2',
  },
  {
    title: 'Camp 1',
    description: 'Description of camp 1',
  },
  {
    title: 'Camp 2',
    description: 'Description of camp 2',
  },
];

const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Profile</Menu.Item>
          <Menu.Item key="3">Settings</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              Courses
            </Menu.Item>
            <Menu.Item key="3" icon={<NotificationOutlined />}>
              Notifications
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
            <Card style={{ marginBottom: 24 }}>
              <Title level={2}>Welcome, {userData.username}!</Title>
              <Avatar size={64} icon={<UserOutlined />} />
              <Text style={{ display: 'block', marginTop: 16 }}>
                Phone Number: {userData.phone_number}
              </Text>
              <Text>Membership Level: {userData.membership_level}</Text>
            </Card>
            <Card>
              <Title level={3}>Your Courses</Title>
              <List
                itemLayout="horizontal"
                dataSource={courseData}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href="https://ant.design">{item.title}</a>}
                      description={item.description}
                    />
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
