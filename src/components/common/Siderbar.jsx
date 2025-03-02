import React, { useState } from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css"; 
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

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
        <NavItem eventKey="placed orders">
          <NavIcon>
            <i className="bi bi-truck" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>placed orders</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideNavBar;
