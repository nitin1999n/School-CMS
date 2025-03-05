import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"; 
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Accordion, Card } from "react-bootstrap";

const SideNavBar = ({ onToggle }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SideNav
      expanded={isVisible}
      onToggle={() => {
        setIsVisible(!isVisible);
        onToggle();
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="bi bi-house" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <Accordion className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <NavItem eventKey="placed orders" className="d-flex">
                <NavIcon>
                  <i className="bi bi-truck" style={{ fontSize: "1.75em" }} />
                </NavIcon>
                <NavText>Placed Orders</NavText>
              </NavItem>
            </Accordion.Header>
            <Accordion.Body>
              <NavItem eventKey="order1" className="sidenav-order-item">
                <NavText>Order 1</NavText>
              </NavItem>
              <NavItem eventKey="order2" className="sidenav-order-item">
                <NavText>Order 2</NavText>
              </NavItem>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavBar;
