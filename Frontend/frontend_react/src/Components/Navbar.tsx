import { GraduationCap } from 'lucide-react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavComponent() {
    return (
        <Navbar expand="lg" className="navbar-custom bg-white sticky-top py-3 shadow-sm">
            <Container>
                <Navbar.Brand href="#" className="fw-bold fs-3 text-primary">
                    <i className="bi bi-journal-bookmark-fill me-2"></i>LearnHub
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ms-auto me-lg-4">
                        <Nav.Link href="#" className="fw-medium active">Home</Nav.Link>
                        <Nav.Link href="#" className="fw-medium">Courses</Nav.Link>
                        <Nav.Link href="#" className="fw-medium">For Instructors</Nav.Link>
                        <Nav.Link href="#" className="fw-medium">About</Nav.Link>
                        <Nav.Link href="#" className="fw-medium">Contact</Nav.Link>
                    </Nav>
                    <div className="d-flex gap-2">
                        <Button variant="outline-primary" className="px-4">Login</Button>
                        <Button variant="primary" className="px-4">Sign Up</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;