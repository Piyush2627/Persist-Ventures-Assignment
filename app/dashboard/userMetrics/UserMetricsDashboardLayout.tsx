import React from "react";
import SimpleLineChart from "../../../components/SimpleLineChart";
import { useDashboardData } from "@/hooks/useDashboardData";
import MetricCard from "../../../components/MetricCard";
import MetricsSection from "../../../components/MetricsSection";

function userMetricsDashboardLayout() {
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const allTimeMetrics = [
    {
      title: "Total Users",
      value: data.userMetrics.allTime.totalUser,
      color: "#4F46E5",
    },
    {
      title: "Active Users",
      value: (
        (data.userMetrics.allTime.activeUser /
          data.userMetrics.allTime.totalUser) *
        100
      ).toFixed(2),
      color: "#F59E0B",
    },
    {
      title: "Total Referrals",
      value: data.userMetrics.allTime.totalReferral,
      color: "#10B981",
    },
    {
      title: "Creators",
      value: data.userMetrics.allTime.creator,
      color: "#3B82F6",
    },
  ];

  const dailyMetrics = [
    {
      title: "Total Users",
      value: data.userMetrics.daily.totalUser,
      color: "#10B981",
    },
    {
      title: "Active Users",
      value: data.userMetrics.daily.activeUser,
      color: "#10B981",
    },
    {
      title: "Referrals",
      value: data.userMetrics.daily.totalReferral,
      color: "#10B981",
    },
    {
      title: "Created",
      value: data.userMetrics.daily.creator,
      color: "#10B981",
    },
  ];

  const monthlyMetrics = [
    {
      title: "Total Users",
      value: data.userMetrics.monthly.totalUser,
      color: "#10B981",
    },
    {
      title: "Active Users",
      value: data.userMetrics.monthly.activeUser,
      color: "#10B981",
    },
    {
      title: "Referrals",
      value: data.userMetrics.monthly.totalReferral,
      color: "#10B981",
    },
    {
      title: "Created",
      value: data.userMetrics.monthly.creator,
      color: "#10B981",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {allTimeMetrics.map((metric) => (
          <MetricCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            color={metric.color}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:gap-8">
        <MetricsSection sectionTitle="Daily" metrics={dailyMetrics} />
        <MetricsSection sectionTitle="Monthly" metrics={monthlyMetrics} />
      </div>
    </div>
  );
}

export default userMetricsDashboardLayout;
