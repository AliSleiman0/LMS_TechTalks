// src/components/Footer.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="py-5 bg-dark text-white">
            <Container>
                <Row className="g-5">
                    <Col lg={4}>
                        <h3 className="text-white fw-bold fs-2 mb-4">
                            <i className="bi bi-journal-bookmark-fill me-2"></i>LearnHub
                        </h3>
                        <p className="text-secondary mb-4">
                            LearnHub is an online learning platform dedicated to providing high-quality education
                            to students worldwide and empowering instructors to share their knowledge.
                        </p>
                        <div className="social-links d-flex gap-2">
                            {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((platform) => (
                                <a key={platform} href="#" className="d-flex align-items-center justify-content-center rounded-circle">
                                    <i className={`bi bi-${platform}`}></i>
                                </a>
                            ))}
                        </div>
                    </Col>

                    <Col lg={2} md={4}>
                        <h4 className="footer-title mb-4">Quick Links</h4>
                        <div className="footer-links d-flex flex-column">
                            {['Home', 'About Us', 'Courses', 'Blog', 'Contact'].map((link) => (
                                <a key={link} href="#" className="mb-2 text-secondary text-decoration-none">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </Col>

                    <Col lg={2} md={4}>
                        <h4 className="footer-title mb-4">Categories</h4>
                        <div className="footer-links d-flex flex-column">
                            {['Development', 'Business', 'Design', 'Marketing', 'Data Science'].map((category) => (
                                <a key={category} href="#" className="mb-2 text-secondary text-decoration-none">
                                    {category}
                                </a>
                            ))}
                        </div>
                    </Col>

                    <Col lg={4} md={4}>
                        <h4 className="footer-title mb-4">Contact Us</h4>
                        <div className="footer-links d-flex flex-column">
                            <div className="d-flex mb-3">
                                <i className="bi bi-geo-alt text-primary me-3 fs-5"></i>
                                <span className="text-secondary">123 Education St, San Francisco, CA 94107</span>
                            </div>
                            <div className="d-flex mb-3">
                                <i className="bi bi-envelope text-primary me-3 fs-5"></i>
                                <span className="text-secondary">hello@learnhub.com</span>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-telephone text-primary me-3 fs-5"></i>
                                <span className="text-secondary">+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="copyright mt-5 pt-4 text-center border-top border-secondary">
                    <p className="mb-0 text-secondary">&copy; 2023 LearnHub. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;