import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './pages/main_page/MainPage';
import LoginPage from './pages/login_page/LoginPage';
import Navbar from './components/navbar/Navbar';
import './index.css'
import { AuthContextProvider } from './components/context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<App/>} />
        <Route path="main-page" element={<MainPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
);

