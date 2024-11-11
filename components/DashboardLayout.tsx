import React from "react";
import SimpleLineChart from "./SimpleLineChart";
import { useDashboardData } from "@/hooks/useDashboardData";
import MetricCard from "./MetricCard";

function DashboardLayout() {
  const { data, isLoading, isError } = useDashboardData();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;
  const totalUsers = data.userMetrics.allTime.totalUser;
  const activeUsers = 28;
  const referrals = 8;
  const creators = 5;
  const activeUserPercentage = ((activeUsers / totalUsers) * 100).toFixed(2);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Users"
          value={totalUsers}
          description="Total number of users on the platform."
          color="#4F46E5"
        />
        <MetricCard
          title="Active Users"
          value={activeUserPercentage}
          description="Percentage of active users out of total users."
          isPercentage={true}
          color="#F59E0B"
        />
        <MetricCard
          title="Total Referrals"
          value={referrals}
          description="Number of referrals made by users."
          color="#10B981"
        />
        <MetricCard
          title="Creators"
          value={creators}
          description="Number of content creators on the platform."
          color="#3B82F6"
        />
      </div>
      <div className="flex space-x-4 rounded pt-2">
        <div className="w-full rounded">
          <SimpleLineChart
            title="Daily User Metrics"
            data={data.userMetrics.daily.chartData}
            xLabel="Time"
            yLabel="User Count"
          />
        </div>
        <div className="w-full rounded">
          <SimpleLineChart
            title="Monthly User Metrics"
            data={data.userMetrics.monthly.chartData}
            xLabel="Date"
            yLabel="User Count"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
