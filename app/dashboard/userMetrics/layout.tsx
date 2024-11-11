"use client";
import MetricsCard from "@/components/MetricsCard";
import { useDashboardData } from "@/hooks/useDashboardData";
import { FaAddressCard } from "react-icons/fa6";
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
    <div className="mx-auto px-4 sm:py-6 lg:h-screen">
      <div>
        <h1 className="text-4xl font-semibold motion-ease-spring-bounciest group-hover:motion-scale-in-50">
          Dashboard
        </h1>
        <p className="text-sm delay-75 sm:w-1/2">
          Welcome, Admin! Your centralized dashboard for efficient management
          and in-depth analytics of Social Verse App is here.{" "}
        </p>
      </div>
      <div className="mb-4 mt-2 grid gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href={"/dashboard/userMetrics"}>
          <MetricsCard
            type="Users"
            Icon={<FaAddressCard className="size-8" />}
          />
        </Link>
        <Link href={"/dashboard/userMetrics/ContentMetrics"}>
          <MetricsCard
            type="Content"
            Icon={<FaAddressCard className="size-8" />}
          />
        </Link>
        <Link href={"/dashboard/userMetrics/blockchainMetrics"}>
          <MetricsCard
            type="Block"
            Icon={<FaAddressCard className="size-8" />}
          />
        </Link>
        <Link href={"/dashboard/userMetrics/engagementMetrics"}>
          <MetricsCard
            type="Engagement"
            Icon={<FaAddressCard className="size-8" />}
          />
        </Link>
      </div>{" "}
      <div className="container mx-auto max-w-full">{children}</div>
    </div>
  );
}

export default ContentLayout;
