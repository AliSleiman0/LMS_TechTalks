// src/components/CoursesSection.tsx
import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";

interface CourseCardProps {
    id: number;
    title: string;
    category: string;
    description: string;
    instructor: {
        name: string;
        role: string;
        avatar: string;
    };
    rating: number;
    price: string;
    discountPrice?: string;
    isBestseller?: boolean;
    isNew?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
    id,
    title,
    category,
    description,
    instructor,
    rating,
    price,
    discountPrice,
    isBestseller,
    isNew
}) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning"></i>);
        }

        if (hasHalfStar) {
            stars.push(<i key="half" className="bi bi-star-half text-warning"></i>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning"></i>);
        }

        return stars;
    };

    return (
        <Link to={`/courses/${id}`} className="text-decoration-none text-dark">
            <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm">
                <div className="position-relative">
                    <div className="card-image-placeholder"></div>
                    {isBestseller && (
                        <Badge bg="success" className="course-badge position-absolute top-0 end-0 m-3">
                            Bestseller
                        </Badge>
                    )}
                    {isNew && (
                        <Badge bg="primary" className="course-badge position-absolute top-0 end-0 m-3">
                            New
                        </Badge>
                    )}
                </div>
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <Badge pill bg="primary" className="text-uppercase">
                            {category}
                        </Badge>
                        <div className="d-flex align-items-center">
                            {renderStars()}
                            <span className="text-muted ms-2">{rating.toFixed(1)}</span>
                        </div>
                    </div>
                    <h5 className="card-title fw-bold mb-3">{title}</h5>
                    <p className="card-text text-secondary mb-4">{description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div className="d-flex align-items-center">
                            <div className="avatar-placeholder me-3"></div>
                            <div>
                                <div className="fw-medium">{instructor.name}</div>
                                <small className="text-muted">{instructor.role}</small>
                            </div>
                        </div>
                        <div>
                            {discountPrice ? (
                                <>
                                    <span className="fw-bold fs-5">{discountPrice}</span>
                                    <del className="text-muted ms-2">{price}</del>
                                </>
                            ) : (
                                <span className="fw-bold fs-5">{price}</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

const CoursesSection: React.FC = () => {
    const courses: CourseCardProps[] = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp 2024",
            category: "Development",
            description: "Learn to build modern web applications with HTML, CSS, JavaScript, React, Node.js and more.",
            instructor: { name: "Alex Johnson", role: "Senior Developer", avatar: "" },
            rating: 4.7,
            price: "$129.99",
            discountPrice: "$89.99",
            isBestseller: true
        },
        {
            id: 2,
            title: "Data Science & Machine Learning Masterclass",
            category: "Data Science",
            description: "Master Python, TensorFlow, and machine learning algorithms for data analysis and predictions.",
            instructor: { name: "Sarah Williams", role: "Data Scientist", avatar: "" },
            rating: 4.9,
            price: "$99.99",
            isNew: true
        },
        {
            id: 3,
            title: "UI/UX Design with Figma: From Beginner to Pro",
            category: "Design",
            description: "Learn to design beautiful and functional user interfaces with modern design tools and principles.",
            instructor: { name: "Michael Chen", role: "Lead Designer", avatar: "" },
            rating: 4.4,
            price: "$79.99"
        }
    ];

    return (
        <section className="py-5 my-5 bg-white">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title fw-bold display-5 mb-3">Popular Courses</h2>
                    <p className="section-subtitle text-secondary fs-5">
                        Discover our most popular courses among students worldwide
                    </p>
                </div>

                <Row>
                    {courses.map((course, index) => (
                        <Col key={index} lg={4} md={6} className="mb-4">
                            <CourseCard {...course} />
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-5">
                    <Button variant="outline-primary" size="lg" className="px-5 py-3 rounded-pill">
                        View All Courses
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default CoursesSection;