"use client";
import MetricsCard from "@/components/MetricsCard";
import { useDashboardData } from "@/hooks/useDashboardData";
import Link from "next/link";

function ContentLayout({ children }: { children: React.ReactNode }) {
  const { data, isLoading, isError } = useDashboardData();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="mx-auto px-4 py-6 lg:h-screen">
      <div>
        <h1 className="group-hover:motion-scale-in-50 motion-ease-spring-bounciest text-4xl font-semibold">
          Dashboard
        </h1>
        <p className=" w-1/2 text-sm delay-75">
          Welcome, Admin! Your centralized dashboard for efficient management
          and in-depth analytics of Social Verse App is here.{" "}
        </p>
      </div>
      <div className="mb-4 mt-2 grid gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href={"/dashboard/userMetrics"}>
          <MetricsCard
            type="Users"
            counts={data.userMetrics.allTime.totalUser}
          />
        </Link>
        <Link href={"/dashboard/userMetrics/ContentMetrics"}>
          <MetricsCard
            type="Content"
            counts={data.contentMetrics.allTime.totalPosts}
          />
        </Link>
        <Link href={"/dashboard/userMetrics/blockchainMetrics"}>
          <MetricsCard
            type="Block"
            counts={data.contentMetrics.allTime.totalPosts}
          />
        </Link>
        <Link href={"/dashboard/userMetrics/engagementMetrics"}>
          <MetricsCard
            type="Engagement"
            counts={data.contentMetrics.allTime.totalPosts}
          />
        </Link>
      </div>{" "}
      <div className="container mx-auto max-w-full">{children}</div>
    </div>
  );
}

export default ContentLayout;
