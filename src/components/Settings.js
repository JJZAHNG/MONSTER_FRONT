import React from 'react';
import { Layout, Form, Input, Button, Switch, Card } from 'antd';
import NavBar from './NavBar';

const { Content } = Layout;

const Settings = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <Layout>
            <NavBar />
            <Content style={{ padding: '50px', minHeight: '80vh' }}>
                <Card title="Settings" style={{ maxWidth: 600, margin: '0 auto' }}>
                    <Form
                        name="settings"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="邮箱"
                            name="email"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="手机号"
                            name="phone"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="接收通知" name="notifications">
                            <Switch />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                保存更改
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
        </Layout>
    );
};

export default Settings;
