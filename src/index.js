import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/login_page/LoginPage';
import Navbar from './components/navbar/Navbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<App/>} />
      <Route path="login" element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter>
);

