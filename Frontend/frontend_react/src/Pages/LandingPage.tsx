// src/components/LandingPage.tsx
import React from 'react';
import HeroSection from '../Components/HeroSection';
import StatsSection from '../Components/StatsSection';
import CoursesSection from '../Components/CoursesSection';
import FeaturesSection from '../Components/FeaturesSection';
import InstructorSection from '../Components/InstructorSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import CTASection from '../Components/CTASection';

import 'bootstrap-icons/font/bootstrap-icons.css';
const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">

            <HeroSection />
            <StatsSection />
            <CoursesSection />
            <FeaturesSection />
            <InstructorSection />
            <TestimonialsSection />
            <CTASection />

        </div>
    );
};

export default LandingPage;