// src/components/HeroSection.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section position-relative overflow-hidden">
            <div className="hero-overlay"></div>
            <Container className="position-relative py-5">
                <Row className="align-items-center py-5">
                    <Col lg={6} className="py-5">
                        <h1 className="hero-title fw-bold display-4 mb-4">Learn Without Limits</h1>
                        <p className="hero-subtitle fs-5 mb-5 opacity-75">
                            Advance your career with industry-relevant courses taught by expert instructors.
                            Start learning today!
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                            <Button variant="light" size="lg" className="px-4 py-3 rounded-pill">
                                Browse Courses
                            </Button>
                            <Button variant="outline-light" size="lg" className="px-4 py-3 rounded-pill">
                                Become an Instructor
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} className="d-none d-lg-block position-relative">
                        <div className="position-relative">
                            <div className="hero-image-main rounded-4 shadow-lg overflow-hidden"></div>
                            <div className="hero-image-secondary position-absolute top-0 end-0 overflow-hidden"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;