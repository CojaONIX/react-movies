import {Container, Nav, Navbar} from "react-bootstrap";


const Navigation = () => {
    return (
        <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">OMDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;