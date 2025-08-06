// src/components/TestimonialsSection.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface Testimonial {
    text: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
}

const TestimonialCard: React.FC<Testimonial> = ({ text, author }) => {
    return (
        <div className="testimonial-card h-100 bg-white rounded-4 p-4 shadow-sm position-relative">
            <p className="testimonial-text fst-italic text-secondary mb-4">{text}</p>
            <div className="d-flex align-items-center">
                <div className="avatar-placeholder me-3 rounded-circle"></div>
                <div>
                    <div className="fw-bold">{author.name}</div>
                    <small className="text-muted">{author.role}</small>
                </div>
            </div>
        </div>
    );
};

const TestimonialsSection: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            text: "LearnHub transformed my career. The web development course gave me the skills I needed to land my dream job as a frontend developer.",
            author: {
                name: "Emily Rodriguez",
                role: "Web Developer",
                avatar: ""
            }
        },
        {
            text: "The instructors are amazing! They break down complex topics into easy-to-understand lessons. I've taken 5 courses and each one exceeded my expectations.",
            author: {
                name: "James Wilson",
                role: "Data Analyst",
                avatar: ""
            }
        },
        {
            text: "As a working professional, the flexibility to learn at my own pace was crucial. The mobile app makes it easy to learn during my commute.",
            author: {
                name: "Sophia Kim",
                role: "Marketing Manager",
                avatar: ""
            }
        }
    ];

    return (
        <section className="py-5 my-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title fw-bold display-5 mb-3">What Our Students Say</h2>
                    <p className="section-subtitle text-secondary fs-5">
                        Hear from thousands of happy students worldwide
                    </p>
                </div>

                <Row>
                    {testimonials.map((testimonial, index) => (
                        <Col key={index} lg={4} className="mb-4">
                            <TestimonialCard {...testimonial} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default TestimonialsSection;