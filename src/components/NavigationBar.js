import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/home">HiltzSite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/inebriatator">Inebriatator</NavDropdown.Item>
              <NavDropdown.Item href="/projects/LEDZilla">LEDZilla</NavDropdown.Item>
              <NavDropdown.Item href="/projects/weCAPTCHA">weCAPTCHA</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/upcoming-projects">Upcoming Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/drone">Drone Work</Nav.Link>
            <Nav.Link href="/3D-Printing">3D Printing</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;