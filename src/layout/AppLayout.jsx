import React, { useState } from "react";
import "../App.css";
import SideNavBar from "../components/common/Siderbar";
import HeaderBar from "../components/common/Header";

const AppLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <div className={`app-layout ${isSidebarVisible ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <HeaderBar />
      <div className="main-content">
        <SideNavBar onToggle={() => setIsSidebarVisible(!isSidebarVisible)} />
        <div className="content">
          {/* Add your main content here */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

