// src/components/CourseDetailPage.tsx
import React, { useState, useEffect } from 'react';
import {
    Container, Row, Col, Card, Accordion, Button,
    Badge, ProgressBar, Tab, Tabs, ListGroup, Image
} from 'react-bootstrap';
import { StarFill, Clock, Person, Globe, Book, PlayBtn, FileEarmarkText } from 'react-bootstrap-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';
// TypeScript interfaces
interface Lesson {
    id: number;
    title: string;
    duration: string;
    type: 'video' | 'text' | 'quiz' | 'pdf';
    completed: boolean;
}

interface Section {
    id: number;
    title: string;
    lessons: Lesson[];
}

interface Review {
    id: number;
    author: string;
    avatar: string;
    rating: number;
    date: string;
    content: string;
}

interface Course {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    instructor: {
        name: string;
        avatar: string;
        bio: string;
    };
    thumbnail: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    language: string;
    duration: string;
    rating: number;
    reviewsCount: number;
    enrolled: number;
    category: string;
    price: number;
    discountPrice?: number;
    sections: Section[];
    reviews: Review[];
}

const CourseDetailPage: React.FC = () => {
    const [course, setCourse] = useState<Course | null>(null);
    const [enrolled, setEnrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeTab, setActiveTab] = useState('curriculum');

    // Mock data fetch
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            setCourse(mockCourse);
            setEnrolled(false);
            setProgress(35);
        }, 500);
    }, []);

    if (!course) {
        return (
            <Container className="my-5 py-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading course details...</p>
            </Container>
        );
    }

    // Calculate total lessons
    const totalLessons = course.sections.reduce((total, section) => total + section.lessons.length, 0);

    // Calculate completed lessons
    const completedLessons = course.sections.reduce(
        (total, section) => total + section.lessons.filter(lesson => lesson.completed).length,
        0
    );

    // Render lesson icon based on type
    const renderLessonIcon = (type: Lesson['type']) => {
        switch (type) {
            case 'video':
                return <PlayBtn className="text-danger me-2" />;
            case 'text':
                return <Book className="text-info me-2" />;
            case 'quiz':
                return <FileEarmarkText className="text-warning me-2" />;
            case 'pdf':
                return <FileEarmarkText className="text-success me-2" />;
            default:
                return <Book className="me-2" />;
        }
    };

    // Render rating stars
    const renderRating = (rating: number) => {
        return (
            <div className="d-flex align-items-center">
                {[...Array(5)].map((_, i) => (
                    <StarFill
                        key={i}
                        className={i < Math.floor(rating) ? "text-warning" : "text-secondary"}
                    />
                ))}
                <span className="ms-2">{rating.toFixed(1)}</span>
                <span className="text-muted ms-2">({course.reviewsCount} reviews)</span>
            </div>
        );
    };

    // Handle enrollment
    const handleEnroll = () => {
        setEnrolled(true);
        alert(`You've successfully enrolled in "${course.title}"!`);
    };

    return (
        <Container className="my-5">
            {/* Course Header */}
            <Row className="mb-4">
                <Col lg={8}>
                    <h1 className="fw-bold mb-3">{course.title}</h1>
                    <p className="lead">{course.description}</p>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {renderRating(course.rating)}
                        <Badge bg="light" text="dark" className="d-flex align-items-center">
                            <Person className="me-1" /> {course.enrolled.toLocaleString()} students enrolled
                        </Badge>
                        <Badge bg="light" text="dark" className="d-flex align-items-center">
                            <Clock className="me-1" /> {course.duration}
                        </Badge>
                        <Badge bg="light" text="dark" className="d-flex align-items-center">
                            <Globe className="me-1" /> {course.language}
                        </Badge>
                        <Badge bg="primary">{course.level}</Badge>
                    </div>
                </Col>

                <Col lg={4} className="d-flex justify-content-center">
                    <Card className="shadow-sm w-100">
                        <Card.Img
                            variant="top"
                            src={course.thumbnail}
                            alt={course.title}
                            className="rounded-top"
                        />
                        <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="mb-0">
                                    {course.discountPrice ? (
                                        <>
                                            <span className="text-danger fw-bold">${course.discountPrice}</span>
                                            <span className="text-muted text-decoration-line-through ms-2">${course.price}</span>
                                        </>
                                    ) : (
                                        <span className="fw-bold">${course.price}</span>
                                    )}
                                </h4>
                                <Badge bg="danger">30% OFF</Badge>
                            </div>

                            {enrolled ? (
                                <>
                                    <Button variant="success" size="lg" className="w-100 mb-2">
                                        {progress > 0 ? "Continue Learning" : "Start Course"}
                                    </Button>
                                    <div className="d-flex justify-content-between small text-muted">
                                        <span>Progress: {progress}%</span>
                                        <span>{completedLessons}/{totalLessons} lessons</span>
                                    </div>
                                    <ProgressBar now={progress} className="mt-2" />
                                </>
                            ) : (
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-100"
                                    onClick={handleEnroll}
                                >
                                    Enroll Now
                                </Button>
                            )}

                            <ListGroup variant="flush" className="mt-3">
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span>Course Duration</span>
                                    <span>{course.duration}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span>Total Lessons</span>
                                    <span>{totalLessons}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span>Skill Level</span>
                                    <span>{course.level}</span>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between">
                                    <span>Certificate</span>
                                    <span>Yes</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Tabs */}
            <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k || 'curriculum')}
                className="mb-4"
            >
                <Tab eventKey="curriculum" title="Curriculum">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4 className="mb-4">Course Content</h4>

                            <Accordion defaultActiveKey="0" flush>
                                {course.sections.map((section, sectionIndex) => (
                                    <Accordion.Item key={section.id} eventKey={sectionIndex.toString()}>
                                        <Accordion.Header>
                                            <div className="d-flex align-items-center w-100">
                                                <div className="flex-grow-1">
                                                    <span className="fw-medium me-2">Section {sectionIndex + 1}:</span>
                                                    {section.title}
                                                </div>
                                                <span className="text-muted me-3">
                                                    {section.lessons.length} lessons
                                                </span>
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <ListGroup variant="flush">
                                                {section.lessons.map((lesson) => (
                                                    <ListGroup.Item key={lesson.id} className="d-flex align-items-center py-3">
                                                        <div className="d-flex align-items-center flex-grow-1">
                                                            {renderLessonIcon(lesson.type)}
                                                            <span className={lesson.completed ? "text-decoration-line-through" : ""}>
                                                                {lesson.title}
                                                            </span>
                                                            {lesson.completed && (
                                                                <Badge bg="success" className="ms-2">
                                                                    Completed
                                                                </Badge>
                                                            )}
                                                        </div>
                                                        <span className="text-muted small">{lesson.duration}</span>
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="description" title="Description">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4 className="mb-4">About This Course</h4>
                            <p className="mb-4">{course.longDescription}</p>

                            <h5>What You'll Learn</h5>
                            <Row className="mt-3">
                                <Col md={6}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex">
                                            <span className="me-2 text-success">✓</span>
                                            <span>Build modern web applications with React and TypeScript</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span className="me-2 text-success">✓</span>
                                            <span>Implement state management using Context API</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span className="me-2 text-success">✓</span>
                                            <span>Create responsive layouts with Bootstrap</span>
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={6}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex">
                                            <span className="me-2 text-success">✓</span>
                                            <span>Integrate RESTful APIs with Axios</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span className="me-2 text-success">✓</span>
                                            <span>Implement authentication and authorization</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span className="me-2 text-success">✓</span>
                                            <span>Deploy applications to production</span>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="instructor" title="Instructor">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col md={3} className="text-center mb-4 mb-md-0">
                                    <Image
                                        src={course.instructor.avatar}
                                        roundedCircle
                                        width={120}
                                        className="mb-3"
                                    />
                                    <h4 className="mb-0">{course.instructor.name}</h4>
                                    <p className="text-muted">Senior Developer & Instructor</p>
                                </Col>
                                <Col md={9}>
                                    <h4 className="mb-3">About the Instructor</h4>
                                    <p>{course.instructor.bio}</p>

                                    <div className="d-flex gap-3 mt-4">
                                        <div className="text-center">
                                            <h5 className="mb-0">4.8</h5>
                                            <p className="text-muted small mb-0">Instructor Rating</p>
                                        </div>
                                        <div className="text-center">
                                            <h5 className="mb-0">24,560</h5>
                                            <p className="text-muted small mb-0">Students</p>
                                        </div>
                                        <div className="text-center">
                                            <h5 className="mb-0">12</h5>
                                            <p className="text-muted small mb-0">Courses</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Tab>

                <Tab eventKey="reviews" title={`Reviews (${course.reviews.length})`}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h4 className="mb-0">Student Feedback</h4>
                                    <div className="d-flex align-items-center mt-2">
                                        <h2 className="mb-0 me-3">{course.rating.toFixed(1)}</h2>
                                        {renderRating(course.rating)}
                                    </div>
                                </div>
                                <Button variant="outline-primary">Add Review</Button>
                            </div>

                            <div className="row">
                                {course.reviews.map((review) => (
                                    <div key={review.id} className="col-md-6 mb-4">
                                        <Card className="h-100">
                                            <Card.Body>
                                                <div className="d-flex mb-3">
                                                    <Image
                                                        src={review.avatar}
                                                        roundedCircle
                                                        width={48}
                                                        height={48}
                                                        className="me-3"
                                                    />
                                                    <div>
                                                        <h6 className="mb-0">{review.author}</h6>
                                                        <small className="text-muted">{review.date}</small>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <div className="d-flex">
                                                            {[...Array(5)].map((_, i) => (
                                                                <StarFill
                                                                    key={i}
                                                                    className={i < review.rating ? "text-warning" : "text-secondary"}
                                                                    size={14}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mb-0">{review.content}</p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </Container>
    );
};

// Mock course data
const mockCourse: Course = {
    id: 1,
    title: "Advanced React & TypeScript Development",
    description: "Master React with TypeScript to build modern, scalable web applications",
    longDescription: "This comprehensive course takes you from React fundamentals to advanced topics with a focus on TypeScript. You'll learn to build modern web applications using React hooks, Context API, and TypeScript's powerful type system. We'll cover everything from component design to state management, testing, and deployment.",
    instructor: {
        name: "Alex Johnson",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Alex is a senior frontend developer with over 10 years of experience building web applications. He has worked with companies like Google, Microsoft, and Airbnb. Alex specializes in React, TypeScript, and modern frontend architectures. He's passionate about teaching and has helped over 50,000 students learn web development."
    },
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    level: "Intermediate",
    language: "English",
    duration: "24 hours",
    rating: 4.7,
    reviewsCount: 1285,
    enrolled: 12456,
    category: "Web Development",
    price: 129.99,
    discountPrice: 89.99,
    sections: [
        {
            id: 1,
            title: "Getting Started with React & TypeScript",
            lessons: [
                { id: 1, title: "Course Introduction", duration: "10:25", type: "video", completed: true },
                { id: 2, title: "Setting up Development Environment", duration: "15:42", type: "video", completed: true },
                { id: 3, title: "TypeScript Fundamentals", duration: "22:18", type: "video", completed: true },
                { id: 4, title: "React Component Patterns", duration: "18:34", type: "video", completed: true },
                { id: 5, title: "Quiz: React Basics", duration: "10 min", type: "quiz", completed: false },
            ]
        },
        {
            id: 2,
            title: "Advanced Component Design",
            lessons: [
                { id: 6, title: "Compound Components Pattern", duration: "20:12", type: "video", completed: true },
                { id: 7, title: "Render Props & Higher Order Components", duration: "25:45", type: "video", completed: false },
                { id: 8, title: "Custom Hooks Deep Dive", duration: "28:30", type: "video", completed: false },
                { id: 9, title: "Performance Optimization Techniques", duration: "32:10", type: "video", completed: false },
                { id: 10, title: "Reading: Component Design Patterns", duration: "15 min", type: "pdf", completed: false },
            ]
        },
        {
            id: 3,
            title: "State Management",
            lessons: [
                { id: 11, title: "Context API with TypeScript", duration: "24:50", type: "video", completed: false },
                { id: 12, title: "Redux Toolkit Fundamentals", duration: "30:15", type: "video", completed: false },
                { id: 13, title: "State Management Patterns", duration: "22:40", type: "video", completed: false },
                { id: 14, title: "Async State Management", duration: "26:25", type: "video", completed: false },
            ]
        },
        {
            id: 4,
            title: "Testing & Deployment",
            lessons: [
                { id: 15, title: "Testing React Components", duration: "28:30", type: "video", completed: false },
                { id: 16, title: "End-to-End Testing", duration: "25:20", type: "video", completed: false },
                { id: 17, title: "Deployment Strategies", duration: "20:15", type: "video", completed: false },
                { id: 18, title: "Course Project", duration: "45 min", type: "text", completed: false },
            ]
        }
    ],
    reviews: [
        {
            id: 1,
            author: "Sarah Williams",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            date: "2 weeks ago",
            content: "This course completely transformed how I approach React development. The TypeScript integration explanations are the best I've seen anywhere. Highly recommended for anyone serious about React development!"
        },
        {
            id: 2,
            author: "Michael Chen",
            avatar: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 4,
            date: "1 month ago",
            content: "Excellent course! The instructor explains complex concepts in a very approachable way. The projects are challenging but rewarding. I wish there was more content on testing, but overall very satisfied."
        },
        {
            id: 3,
            author: "Emily Rodriguez",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            rating: 5,
            date: "3 weeks ago",
            content: "I've taken several React courses, but this is by far the best. The TypeScript focus is exactly what I needed to take my skills to the next level. The real-world examples are incredibly valuable."
        },
        {
            id: 4,
            author: "James Wilson",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
            rating: 5,
            date: "2 months ago",
            content: "The course content is top-notch. I especially appreciated the advanced patterns section which covered techniques I haven't seen in other courses. The instructor's teaching style is engaging and clear."
        }
    ]
};

export default CourseDetailPage;