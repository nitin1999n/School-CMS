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
        className="topnav"
      >
        {/* <Nav className="mr-auto d-flex align-items-center">
          <NavItem onClick={onToggle}>
            <NavIcon>
              <i className="bi bi-list" style={{ fontSize: "1.5em", color: "white", marginRight: "10px" }}></i>
            </NavIcon>
          </NavItem>
        </Nav> */}
        <Navbar.Brand href="" className="mx-auto">CMS</Navbar.Brand>
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
