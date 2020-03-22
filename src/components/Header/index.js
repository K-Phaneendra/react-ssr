import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Input, Select, Button } from "antd";
import { MdClear } from "react-icons/md";

import logo from "../../logo.svg";
import Toggle from "../Toggle";

const { Search } = Input;
const { Option } = Select;

const Header = props => {
  const {
    toggleTheme,
    searchOnChange,
    searchString,
    priceFilter,
    clearFilters
  } = props;
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
            <Select defaultValue="all" onChange={priceFilter}>
              <Option value="below">Below 2000</Option>
              <Option value="above">Above 2000</Option>
              <Option value="all">All</Option>
            </Select>
          </Nav>
          <Nav>
            <Search
              placeholder="search.."
              onChange={e => searchOnChange(e.target.value)}
              onSearch={value => searchOnChange(value)}
              // style={{ width: 200 }}
              value={searchString}
            />
          </Nav>
          <Nav>
            <p className="pointer" title="clear filters" onClick={clearFilters}>
              {/* <MdClear color="white" size="25px" /> */}
              <Button danger>Clear filters</Button>
            </p>
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
