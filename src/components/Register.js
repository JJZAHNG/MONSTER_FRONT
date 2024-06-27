import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Alert, Card, Typography } from 'antd';
import { LockOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (values) => {
    setError('');
    setSuccess('');

    try {
      await axios.post('http://127.0.0.1:8000/api/user/register/', {
        username: values.username,
        password: values.password,
        phone_number: values.phone_number,
      });
      setSuccess('Registration successful!');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <Card>
        <Title level={2} style={{ textAlign: 'center' }}>Register</Title>
        {error && <Alert message={error} type="error" showIcon />}
        {success && <Alert message={success} type="success" showIcon />}
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="phone_number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
