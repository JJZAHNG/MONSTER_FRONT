import React from 'react';
import { Layout, Menu, Typography, Row, Col, Card, Avatar, Button } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  ShopOutlined,
  ReadOutlined,
  TrophyOutlined,
  RocketOutlined,
  BulbOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        breakpoint="lg"
        collapsedWidth="80"
        style={{ background: '#001529' }}
      >
        <div className="logo" style={{ margin: '16px', textAlign: 'center', color: '#fff' }}>
          <Title level={3} style={{ color: '#fff' }}>MONSTER</Title>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            个人中心
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            设置
          </Menu.Item>
          <Menu.Item key="4" icon={<ReadOutlined />}>
            在线课堂
          </Menu.Item>
          <Menu.Item key="5" icon={<ShopOutlined />}>
            积分商城
          </Menu.Item>
          <Menu.Item key="6" icon={<TrophyOutlined />}>
            参赛辅导
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
          <Title level={2}>欢迎来到会员系统</Title>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={<img alt="skills" src="/Users/jjzhang/Documents/monster_frontend/src/images/skill.png" />}
                >
                  <Card.Meta
                    avatar={<Avatar icon={<BulbOutlined />} />}
                    title="技能训练"
                    description="提升你的技能，解锁更多成就！"
                  />
                  <Button type="primary" block style={{ marginTop: '10px' }}>
                    立即参与
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={<img alt="camp" src="/images/camp.jpg" />}
                >
                  <Card.Meta
                    avatar={<Avatar icon={<RocketOutlined />} />}
                    title="营地活动"
                    description="参加精彩的营地活动，结交新朋友！"
                  />
                  <Button type="primary" block style={{ marginTop: '10px' }}>
                    查看详情
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={<img alt="projects" src="/images/projects.jpg" />}
                >
                  <Card.Meta
                    avatar={<Avatar icon={<ReadOutlined />} />}
                    title="课题孵化"
                    description="参与课题研究，提升专业能力！"
                  />
                  <Button type="primary" block style={{ marginTop: '10px' }}>
                    了解更多
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={<img alt="classroom" src="/images/classroom.jpg" />}
                >
                  <Card.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title="在线课堂"
                    description="随时随地学习新知识！"
                  />
                  <Button type="primary" block style={{ marginTop: '10px' }}>
                    开始学习
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={<img alt="market" src="/images/market.jpg" />}
                >
                  <Card.Meta
                    avatar={<Avatar icon={<ShopOutlined />} />}
                    title="积分商城"
                    description="用积分兑换精美好礼！"
                  />
                  <Button type="primary" block style={{ marginTop: '10px' }}>
                    立即购物
                  </Button>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card
                  hoverable
                  cover={<img alt="competitions" src="/images/competitions.png" />}
                >
                  <Card.Meta
                    avatar={<Avatar icon={<TrophyOutlined />} />}
                    title="参赛辅导"
                    description="提升比赛能力，冲击更高荣誉！"
                  />
                  <Button type="primary" block style={{ marginTop: '10px' }}>
                    报名参赛
                  </Button>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          MONSTER ©2024 Created by Your Team
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
