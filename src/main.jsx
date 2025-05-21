import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/rigster/Register.jsx';
import Profile from './pages/profile/Profile.jsx';
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
