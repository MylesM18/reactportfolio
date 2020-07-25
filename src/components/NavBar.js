import React from "react";
import { Navbar } from "react-bootstrap/";
import { NavDropdown } from "react-bootstrap/";
import "./css/NavStyle.css";

export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand className="name" href="/">
          Myles Magee
        </Navbar.Brand>
        <NavDropdown className="dropDown" title="More" id="collasible-nav-dropdown">
          <NavDropdown.Item className="dropdownText" href="/">Home</NavDropdown.Item>
          <NavDropdown.Item className="dropdownText" href="/portfolio">Portfolio</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item className="dropdownText" href="/contact">Contact</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
};

const navStyle = {};

export default NavBar;
