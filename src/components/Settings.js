import React from 'react';
import { Layout, Menu, Form, Input, Switch, Button } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;

const Settings = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => window.location.href = "/home"}>Home</Menu.Item>
          <Menu.Item key="2" onClick={() => window.location.href = "/profile"}>Profile</Menu.Item>
          <Menu.Item key="3" onClick={() => window.location.href = "/settings"}>Settings</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['3']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<UserOutlined />} onClick={() => window.location.href = "/home"}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />} onClick={() => window.location.href = "/profile"}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />} onClick={() => window.location.href = "/settings"}>
              Settings
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
            <Form
              name="settings"
              layout="vertical"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Receive Email Notifications"
                name="email_notifications"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
              <Form.Item
                label="Receive SMS Notifications"
                name="sms_notifications"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
              <Form.Item
                label="Privacy Settings"
                name="privacy_settings"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save Settings
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Monster System ©2024 Created by You
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Settings;
