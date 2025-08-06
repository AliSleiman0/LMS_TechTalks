// src/components/FeaturesSection.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface FeatureItem {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureItem> = ({ icon, title, description }) => {
    return (
        <div className="text-center px-4 mb-5">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center rounded-circle mb-4">
                <i className={`bi ${icon} fs-1`}></i>
            </div>
            <h3 className="feature-title fw-bold fs-4 mb-3">{title}</h3>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: "bi-play-btn-fill",
            title: "Engaging Content",
            description: "Interactive lessons with videos, quizzes, and hands-on projects to enhance your learning experience."
        },
        {
            icon: "bi-people-fill",
            title: "Expert Instructors",
            description: "Learn from industry professionals with years of practical experience in their fields."
        },
        {
            icon: "bi-laptop",
            title: "Learn Anywhere",
            description: "Access courses on any device, at any time. Learn at your own pace with lifetime access."
        },
        {
            icon: "bi-journal-check",
            title: "Progress Tracking",
            description: "Track your learning journey with detailed progress reports and completion certificates."
        },
        {
            icon: "bi-chat-dots-fill",
            title: "Community Support",
            description: "Join discussion forums to connect with instructors and fellow students for help and networking."
        },
        {
            icon: "bi-award-fill",
            title: "Career Advancement",
            description: "Gain in-demand skills that employers are looking for to advance your career."
        }
    ];

    return (
        <section className="py-5 bg-light">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title fw-bold display-5 mb-3">Why Choose LearnHub?</h2>
                    <p className="section-subtitle text-secondary fs-5">
                        We provide the best learning experience for both students and instructors
                    </p>
                </div>

                <Row>
                    {features.map((feature, index) => (
                        <Col key={index} lg={4} md={6}>
                            <FeatureCard {...feature} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default FeaturesSection;