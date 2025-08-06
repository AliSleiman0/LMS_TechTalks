// src/components/InstructorSection.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const InstructorSection: React.FC = () => {
    const features = [
        {
            icon: "bi-people",
            title: "Reach Students Worldwide",
            description: "Teach students from all over the world and build your personal brand as an expert."
        },
        {
            icon: "bi-cash-coin",
            title: "Earn Money",
            description: "Get paid monthly for the courses you create with our competitive revenue sharing model."
        },
        {
            icon: "bi-tools",
            title: "Powerful Teaching Tools",
            description: "Access our comprehensive course creation tools, analytics, and marketing support."
        }
    ];

    return (
        <section className="py-5 instructor-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="mb-5 mb-lg-0">
                        <div className="instructor-image rounded-4 shadow-lg overflow-hidden"></div>
                    </Col>
                    <Col lg={6}>
                        <h2 className="section-title fw-bold display-5 mb-4">Become an Instructor</h2>
                        <p className="fs-5 text-secondary mb-5">
                            Share your knowledge and earn money by teaching what you love.
                        </p>

                        {features.map((feature, index) => (
                            <div key={index} className="d-flex mb-4">
                                <div className="me-4">
                                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                        <i className={`bi ${feature.icon} fs-4`}></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="fw-bold">{feature.title}</h4>
                                    <p className="text-secondary">{feature.description}</p>
                                </div>
                            </div>
                        ))}

                        <div className="mt-5">
                            <Button variant="primary" size="lg" className="px-5 py-3 rounded-pill">
                                Start Teaching Today
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InstructorSection;