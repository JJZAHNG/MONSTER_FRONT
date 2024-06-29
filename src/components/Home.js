import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
import NavBar from './NavBar';

const { Content } = Layout;

const Home = () => {
    return (
        <Layout>
            <NavBar />
            <Content style={{ padding: '50px', minHeight: '80vh' }}>
                <h1>Welcome to MONSTER</h1>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Courses" bordered={false}>
                            Explore our wide range of courses to boost your skills.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Membership" bordered={false}>
                            Check out our membership plans for exclusive benefits.
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Shop" bordered={false}>
                            Discover items in our shop and use your points.
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Home;
