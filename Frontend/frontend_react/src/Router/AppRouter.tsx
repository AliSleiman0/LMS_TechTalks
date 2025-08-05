import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import LoginPage from "../Pages/Login-Page";
import SignUpPage from "../Pages/SignUp-Page";
import Layout from "../Components/Layout/Layout";
import FeaturedCourses from "../Pages/Featured-Courses-Page";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/FCourses" element={<FeaturedCourses />} />
        </Route>

        {/* Outside layout */}
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
