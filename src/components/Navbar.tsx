import { Container, Navbar as NavbarBS, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFavoriteStore } from "../stores/counter-store";
import { Link } from "react-router-dom";

const Navbar = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  return (
    <>
      <NavbarBS bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBS.Brand as={Link} to="/">
            Home
          </NavbarBS.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/users">
              Users
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
          <NavbarBS.Brand>Favorites: {favorites.length}</NavbarBS.Brand>
        </Container>
      </NavbarBS>
    </>
  );
};

export default Navbar;
