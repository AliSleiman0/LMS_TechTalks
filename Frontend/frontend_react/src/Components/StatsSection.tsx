// src/components/StatsSection.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface StatCardProps {
    number: string;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
    return (
        <div className="stats-card h-100 p-4 rounded-4 shadow-sm">
            <div className="stats-number fw-bold display-4 mb-3">{number}</div>
            <div className="stats-label fs-5">{label}</div>
        </div>
    );
};

const StatsSection: React.FC = () => {
    const stats = [
        { number: "12,000+", label: "Active Students" },
        { number: "850+", label: "Courses" },
        { number: "320+", label: "Expert Instructors" },
        { number: "98%", label: "Satisfaction Rate" }
    ];

    return (
        <section className="py-5 bg-white">
            <Container>
                <Row className="g-4">
                    {stats.map((stat, index) => (
                        <Col key={index} md={3} sm={6}>
                            <StatCard number={stat.number} label={stat.label} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default StatsSection;