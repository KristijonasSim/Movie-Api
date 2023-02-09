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
import RegisterPage from './pages/register_page/RegisterPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './index.css'
import { AuthContextProvider } from './components/context/AuthContext';
import MoviesPage from './pages/movies_page/MoviesPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<App/>} />
        <Route path="main-page" element={<MainPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path ='register' element={<RegisterPage/>}/>
        <Route path='movies' element={<MoviesPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </AuthContextProvider>
);

