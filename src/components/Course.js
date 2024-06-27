import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Layout, Menu, Table, Button, Modal, Form, Input, Typography, message, InputNumber, DatePicker } from 'antd';
import { PlusOutlined, BookOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/courses/');
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      message.error('获取课程列表失败');
      setLoading(false);
    }
  };

  const handleAddCourse = async (values) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/courses/', {
        ...values,
        start_time: values.start_time.format(),
        end_time: values.end_time.format(),
      });
      fetchCourses();
      setIsModalVisible(false);
      form.resetFields();
      message.success('课程添加成功');
    } catch (error) {
      message.error('添加课程失败');
    }
  };

  const columns = [
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '开始时间',
      dataIndex: 'start_time',
      key: 'start_time',
      render: text => moment(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: '结束时间',
      dataIndex: 'end_time',
      key: 'end_time',
      render: text => moment(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: '上课老师',
      dataIndex: 'instructor',
      key: 'instructor',
    },
    {
      title: '学生人数',
      dataIndex: 'students',
      key: 'students',
    },
    {
      title: '课程描述',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible style={{ background: '#001529' }}>
        <div className="logo" style={{ height: '32px', margin: '16px', background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<BookOutlined />}>
            课程管理
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: '0 16px', background: '#1890ff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0, color: '#fff' }}>课程管理系统</Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
          >
            添加课程
          </Button>
        </Header>
        <Content style={{ margin: '16px', background: '#fff' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Table columns={columns} dataSource={courses} loading={loading} rowKey="id" />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>课程管理系统 ©2024 Created by You</Footer>
      </Layout>

      <Modal
        title="添加新课程"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleAddCourse} layout="vertical">
          <Form.Item
            name="name"
            label="课程名称"
            rules={[{ required: true, message: '请输入课程名称' }]}
          >
            <Input placeholder="课程名称" />
          </Form.Item>
          <Form.Item
            name="start_time"
            label="开始时间"
            rules={[{ required: true, message: '请输入开始时间' }]}
          >
            <DatePicker showTime placeholder="选择开始时间" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="end_time"
            label="结束时间"
            rules={[{ required: true, message: '请输入结束时间' }]}
          >
            <DatePicker showTime placeholder="选择结束时间" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="instructor"
            label="上课老师"
            rules={[{ required: true, message: '请输入上课老师' }]}
          >
            <Input placeholder="上课老师" />
          </Form.Item>
          <Form.Item
            name="students"
            label="学生人数"
            rules={[{ required: true, message: '请输入学生人数' }]}
          >
            <InputNumber min={1} placeholder="学生人数" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="description"
            label="课程描述"
            rules={[{ required: true, message: '请输入课程描述' }]}
          >
            <Input placeholder="课程描述" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              添加课程
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Course;
