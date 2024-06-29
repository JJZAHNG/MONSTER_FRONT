import React, { useState } from 'react';
import { Layout, Menu, Avatar, Typography, Card, List, Button, Modal, Form, Input } from 'antd';
import { UserOutlined, EditOutlined, LockOutlined } from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;
const { Title, Text } = Typography;

const userData = {
  username: 'ADMIN',
  phone_number: '15105187807',
  membership_level: 'Senior Ultra',
  email: 'admin@example.com'
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

const Profile = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isPasswordModalVisible, setIsPasswordModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const showEditModal = () => {
    setIsEditModalVisible(true);
  };

  const handleEditOk = () => {
    setIsEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setIsEditModalVisible(false);
  };

  const showPasswordModal = () => {
    setIsPasswordModalVisible(true);
  };

  const handlePasswordOk = () => {
    setIsPasswordModalVisible(false);
  };

  const handlePasswordCancel = () => {
    setIsPasswordModalVisible(false);
  };

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
            defaultSelectedKeys={['2']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              Courses
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
              <Avatar size={64} icon={<UserOutlined />} />
              <Title level={2} style={{ marginTop: 16 }}>{userData.username}</Title>
              <Text>Email: {userData.email}</Text><br />
              <Text>Phone Number: {userData.phone_number}</Text><br />
              <Text>Membership Level: {userData.membership_level}</Text><br />
              <Button type="primary" icon={<EditOutlined />} onClick={showEditModal} style={{ marginTop: 16 }}>
                Edit Profile
              </Button>
              <Button type="default" icon={<LockOutlined />} onClick={showPasswordModal} style={{ marginLeft: 16, marginTop: 16 }}>
                Change Password
              </Button>
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

      <Modal
        title="Edit Profile"
        visible={isEditModalVisible}
        onOk={handleEditOk}
        onCancel={handleEditCancel}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            username: userData.username,
            email: userData.email,
            phone_number: userData.phone_number,
          }}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone_number"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Change Password"
        visible={isPasswordModalVisible}
        onOk={handlePasswordOk}
        onCancel={handlePasswordCancel}
      >
        <Form
          form={passwordForm}
          layout="vertical"
          name="form_in_modal_password"
        >
          <Form.Item
            name="current_password"
            label="Current Password"
            rules={[{ required: true, message: 'Please input your current password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="new_password"
            label="New Password"
            rules={[{ required: true, message: 'Please input your new password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm_password"
            label="Confirm Password"
            rules={[{ required: true, message: 'Please confirm your new password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Profile;
