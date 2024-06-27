import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Alert, Card, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/user/login/', {
        phone_number: values.phone_number,
        password: values.password,
      });
      console.log(response.data); // 打印 API 响应
      if (response.data.token) {
        setSuccess('Login successful!');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        navigate('/home');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <Card>
        <Title level={2} style={{ textAlign: 'center' }}>Login</Title>
        {error && <Alert message={error} type="error" showIcon />}
        {success && <Alert message={success} type="success" showIcon />}
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="phone_number"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
