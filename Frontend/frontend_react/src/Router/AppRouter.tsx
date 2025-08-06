import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "../Pages/Login-Page";
import SignUpPage from "../Pages/SignUp-Page";
import Layout from "../Components/Layout/Layout";
import FeaturedCourses from "../Pages/Featured-Courses-Page";
import LandingPage from "../Pages/LandingPage";
// Add this import
import CourseDetailPage from "../Pages/CourseDetailPage"; // adjust path if needed

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/* Layout wrapper */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="/courses/:courseId" element={<CourseDetailPage />} />

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
