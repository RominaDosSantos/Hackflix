import "../css/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarPage() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      id="navbarPrincipal"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" id="navbarHackflix">
            HACKFLIX
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Search by" id="collasible-nav-dropdown">
              <NavDropdown.Item className="divSearchNavbar" as="div">
                <Link to="/buscar" className="searchNavbar">
                  Title
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="searchNavbar" as="div">
                <Link to="/rating" className="searchNavbar">
                  Rating
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} as="div">
              <Link to="/sobre-nosotros" className="navbarAnchor">
                About us
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={3} as="div">
              <Link to="/contacto" className="navbarAnchor">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
