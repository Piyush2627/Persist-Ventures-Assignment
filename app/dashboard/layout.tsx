import Link from "next/link";
import React, { ReactNode } from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        sidebar
        <button>
          <Link href={"/dashboard/nested"}>go to nested</Link>
        </button>
      </div>
      {children}
    </div>
  );
}

export default DashboardLayout;
