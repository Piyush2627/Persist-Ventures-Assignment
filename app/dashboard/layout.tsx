import SideBar from "@/components/SideBar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="block overflow-x-hidden sm:flex">
        <div className="">
          <SideBar />
        </div>
        <div className="container mx-auto max-w-full">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
