import Link from "next/link";
import React from "react";
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
  return (
    <div className="">
      {sidebarItem.map((ele, index) => (
        <div key={index} className="group p-2">
          <Link href={ele.link}>
            <div className="relative flex items-center justify-center rounded p-2 hover:bg-zinc-700">
              {ele.icon}

              {/* Tooltip */}
              <div className="absolute left-3/4 top-1/2 z-10 ml-1 -translate-y-1/2 transform whitespace-nowrap rounded-md border border-gray-300 bg-white px-2 py-1 opacity-0 shadow-lg transition-opacity duration-300 hover:motion-preset-rebound group-hover:opacity-100">
                <span className="text-sm font-medium text-gray-800">
                  {ele.title}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SideBar;
