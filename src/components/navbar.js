import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">E Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/clothing">Clothing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/offers">Special Offers</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex me-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <div className="d-flex gap-2">
            <Button as={Link} to="/login" variant="outline-primary">Login</Button>
            <Button as={Link} to="/logout" variant="outline-danger">Logout</Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
