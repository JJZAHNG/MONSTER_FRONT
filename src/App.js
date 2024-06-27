import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/reset.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {user && <Route path="/home" element={<Home user={user} />} />}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
