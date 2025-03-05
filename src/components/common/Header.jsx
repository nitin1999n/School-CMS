import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "./style.css";

const HeaderBar = ({ onToggle }) => {
  return (
    <div className="topnav">
      <Navbar
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="">CMS</Navbar.Brand>
        <Nav className="ml-auto d-flex align-items-center">
          <NavItem>
            <NavIcon>
              <i className="bi bi-bell" style={{ fontSize: "1.5em", color: "white", marginRight: "10px" }}></i>
            </NavIcon>
          </NavItem>
          <NavItem>
            <NavIcon>
              <i className="bi bi-gear" style={{ fontSize: "1.5em", color: "white" }}></i>
            </NavIcon>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderBar;
