import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import LoginPage from '../Pages/Login-Page';

import  SignUpPage from '../Pages/SignUp-Page';


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
                <Route path="/signin" element={<LoginPage/>} />
                        <Route path="/signup" element={<SignUpPage />} />


      </Routes>
    </Router>
  );
};

export default AppRouter;   