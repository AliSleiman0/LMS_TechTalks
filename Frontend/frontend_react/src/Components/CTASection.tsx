// src/components/CTASection.tsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTASection: React.FC = () => {
    return (
        <section className="py-5 cta-section position-relative overflow-hidden">
            <div className="cta-overlay"></div>
            <Container className="position-relative py-5 text-center">
                <h2 className="cta-title fw-bold display-5 mb-4">Start Your Learning Journey Today</h2>
                <p className="fs-5 mb-5 opacity-75">
                    Join thousands of students advancing their careers with LearnHub
                </p>
                <div className="cta-buttons">
                    <Button variant="light" size="lg" className="px-5 py-3 rounded-pill me-3">
                        Join Free
                    </Button>
                    <Button variant="outline-light" size="lg" className="px-5 py-3 rounded-pill">
                        Browse Courses
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default CTASection;