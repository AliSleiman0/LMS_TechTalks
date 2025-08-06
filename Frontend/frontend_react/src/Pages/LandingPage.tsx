// src/components/LandingPage.tsx
import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import StatsSection from '../Components/StatsSection';
import CoursesSection from '../Components/CoursesSection';
import FeaturesSection from '../Components/FeaturesSection';
import InstructorSection from '../Components/InstructorSection';
import TestimonialsSection from '../Components/TestimonialsSection';
import CTASection from '../Components/CTASection';
import Footer from '../Components/Footer';

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