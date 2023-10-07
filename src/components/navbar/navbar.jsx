import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useSelector } from 'react-redux';
import { Lang } from "../contexts/lang";
import { Theme } from "../contexts/theme";
import { useContext } from 'react';
const Navbar = () => {
  const selector = useSelector(state => state.cartitems.length);
  const { lang, setLang } = useContext(Lang);
  const { theme, setTheme } = useContext(Theme);

  const handleLangChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
  };

  const handleLightThemeChange = (e) => {
    setTheme("light");
  };

  const handleDarkThemeChange = (e) => {
    setTheme("dark");
  };

  return (
    <>
      <BootstrapNavbar bg="dark" variant="dark" expand="md">
        <Container>
          <BootstrapNavbar.Brand>My Ecommerce :D</BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BootstrapNavbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/productlist">Products List</Link>
              <Link className="nav-link" to="/offers">Offers</Link>
              <Link className="nav-link" to="/aboutus">About us</Link>
            </Nav>
            <Nav className="navdata">
              <Link to="/cart" className='cartstyle'>
                <FontAwesomeIcon icon={faCartShopping} />
                <p>{selector}</p>
              </Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              <select onChange={handleLangChange} className='langselect' value={lang}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </select>
              <div className='themeselect'>
                {theme === "light" ? (
                  <>
                    <FontAwesomeIcon icon={faSun} style={{ color: "#b17016" }} />
                    <FontAwesomeIcon onClick={handleDarkThemeChange} icon={faMoon} style={{ color: "#796767", cursor: "pointer" }} />
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon onClick={handleLightThemeChange} icon={faSun} style={{ color: "#796767", cursor: "pointer" }} />
                    <FontAwesomeIcon icon={faMoon} style={{ color: "#0f3fd2" }} />
                  </>
                )}
              </div>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      <br />
    </>
  );
};

export default Navbar;
