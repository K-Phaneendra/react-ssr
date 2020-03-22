import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import Toggle from "../Toggle";

const Header = props => {
  const { toggleTheme } = props;
  return (
    <>
      <Navbar
        className="fullWidth"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/products">
              <Nav className="nav-link">Products</Nav>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <Toggle
                onChange={toggleTheme}
                checkedValue={"dark"}
                uncheckedValue={"light"}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
