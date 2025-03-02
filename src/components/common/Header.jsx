import React from "react";
import { Navbar } from "react-bootstrap";
import "./style.css";

const HeaderBar = () => {
  return (
    <div className="topnav">
      <Navbar
        fixed="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="topnav"
      >
        <Navbar.Brand href="" className="mx-auto">HRMS</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default HeaderBar;
