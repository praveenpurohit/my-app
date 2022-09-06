import './style.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComponent() {
    return (
        <Navbar className='navbar-dark' collapseOnSelect expand="lg" variant="dark">

            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto">
                    <Nav.Link href="#features">Services</Nav.Link>
                    <Nav.Link href="#pricing">AboutUs</Nav.Link>

                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Product1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Product2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Product3</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Product4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav className='navbar-right'>
                    <Nav.Link href="#deets">SignUp</Nav.Link>
                    <Nav.Link href="#memes"> Login </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}