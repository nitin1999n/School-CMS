import React, { useState } from "react";
import "../App.css";
import SideNavBar from "../components/common/Siderbar";
import HeaderBar from "../components/common/Header";

const AppLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className={`app-layout ${isSidebarVisible ? "sidebar-expanded" : "sidebar-collapsed"}`}>
      <HeaderBar />
      <div className="layout-container">
        <SideNavBar onToggle={() => setIsSidebarVisible(!isSidebarVisible)} />
        <div className="main-content">
          <div className="content">
            <h2>Dashboard</h2>
            <p>Welcome to the CMS. This is the main content area.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
