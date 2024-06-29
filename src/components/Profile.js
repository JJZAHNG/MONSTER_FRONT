import React from 'react';
import { Layout, Card, Descriptions, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import NavBar from './NavBar';

const { Content } = Layout;

const Profile = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        membership: 'Gold Member'
    };

    return (
        <Layout>
            <NavBar />
            <Content style={{ padding: '50px', minHeight: '80vh' }}>
                <Card
                    title="Profile"
                    style={{ maxWidth: 600, margin: '0 auto' }}
                >
                    <Avatar size={64} icon={<UserOutlined />} />
                    <Descriptions column={1} bordered>
                        <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
                        <Descriptions.Item label="Membership">{user.membership}</Descriptions.Item>
                    </Descriptions>
                </Card>
            </Content>
        </Layout>
    );
};

export default Profile;
