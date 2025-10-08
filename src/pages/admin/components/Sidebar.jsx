import { BsLayoutSidebar } from "react-icons/bs";
import React, { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <aside className="h-screen">
        <nav
          className={`h-full flex flex-col bg-white border-r rounded-r-2xl shadow-sm transition-all duration-300 ${
            collapsed ? "w-20" : "w-64"
          }`}
        >
          <div className="p-4 pb-2 flex justify-between items-center">
            <h1
              className={`transition-all ${
                collapsed ? "text-[0px]" : "text-lg"
              }`}
            >
              Admin Dashboard
            </h1>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-1.5 rounded-lg bg-gray"
            >
              <BsLayoutSidebar className="transition-transform text-black" />
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
