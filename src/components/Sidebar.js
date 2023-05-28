import React, { useState } from "react";
import SidebarNavItem from "./SidebarNavItem";

import {
  faBuilding,
  faChartLine,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [isBusinessSpecific, setIsBusinessSpecific] = useState(true);

  return (
    <div className="h-screen bg-white w-sidebar p-5 overflow-y-auto fixed left-0 top-0">
      <h1 className="text-2xl font-bold text-black mb-4">PURSCAN</h1>
      <SidebarNavItem name="Reports" icon={faChartLine} path="/reports" />
      <SidebarNavItem name="Purchases" icon={faBuilding} path="/purchases" />
      {/* <SidebarNavItem name="API Test" icon={faServer} path="/api-test" /> */}
    </div>
  );
}

export default Sidebar;
