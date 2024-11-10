import SideBar from "@/components/SideBar";
import Link from "next/link";
import React, { ReactNode } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex">
        <div className="">
          <SideBar />
        </div>
        <div className="container mx-auto max-w-full">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
