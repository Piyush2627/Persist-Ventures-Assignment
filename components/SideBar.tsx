"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";

const sidebarItem = [
  {
    id: 1,
    title: "About",
    link: "/dashboard/about",
    icon: <TbLayoutDashboardFilled className="size-8" />,
  },
  {
    id: 2,
    title: "Dashboard",
    link: "/dashboard/userMetrics",
    icon: <FaUsers className="size-8" />,
  },
];

function SideBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Toggle function to show/hide sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="sticky top-0 flex h-20 items-center rounded border-zinc-800 p-4 sm:top-0 sm:z-10 sm:h-screen sm:flex-col sm:border-r">
      {/* Toggle Button */}
      <button
        className="size-12 items-center justify-center rounded border border-zinc-800 bg-zinc-900 px-2 align-middle sm:hidden"
        onClick={toggleSidebar}
      >
        <CgMenuLeft className="size-8" />
      </button>

      {/* Sidebar Content */}
      {isSidebarVisible && (
        <div className="flex sm:mt-0 sm:flex-col sm:space-y-4">
          {sidebarItem.map((item) => (
            <div key={item.id} className="group p-2">
              <Link href={item.link}>
                <div className="relative flex cursor-pointer items-center justify-center rounded p-2 hover:bg-zinc-700">
                  {item.icon}

                  {/* Tooltip */}
                  <div className="absolute left-3/4 top-1/2 z-10 ml-1 -translate-y-1/2 transform whitespace-nowrap rounded-md border border-gray-300 bg-white px-2 py-1 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium text-gray-800">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SideBar;
