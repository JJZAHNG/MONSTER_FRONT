import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Course from './components/Course';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" component={Settings} />
          {user && <Route path="/home" element={<Home user={user} />} />}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
