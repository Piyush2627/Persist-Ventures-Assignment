import React from "react";
import { useDashboardData } from "@/hooks/useDashboardData";
import MetricCard from "../../../../components/MetricCard";
import MetricsSection from "../../../../components/MetricsSection";
import SimpleLineChart from "../../../../components/SimpleLineChart";

function ContentMetricsDashboardLayout() {
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const allTimeMetrics = [
    {
      title: "Total Posts",
      value: data.contentMetrics.allTime.totalPosts,
      color: "#4F46E5",
    },
    {
      title: "Total Category",
      value: data.contentMetrics.allTime.totalCategory,
      color: "#F59E0B",
    },
    {
      title: "Total Post Exit Count",
      value: data.contentMetrics.allTime.totalPostExitCount,
      color: "#10B981",
    },
    {
      title: "totalPostShares",
      value: data.contentMetrics.allTime.totalPostShares,
      color: "#3B82F6",
    },
  ];

  const dailyMetrics = [
    {
      title: "Total Users",
      value: data.contentMetrics.daily.totalPosts,
      color: "#10B981",
    },
    {
      title: "Active Users",
      value: data.contentMetrics.daily.totalCategory,
      color: "#10B981",
    },
    {
      title: "Referrals",
      value: data.contentMetrics.daily.totalPostExitCount,
      color: "#10B981",
    },
    {
      title: "Created",
      value: data.contentMetrics.daily.totalPostShares,
      color: "#10B981",
    },
  ];

  const monthlyMetrics = [
    {
      title: "Total Users",
      value: data.contentMetrics.monthly.totalPosts,
      color: "#10B981",
    },
    {
      title: "Active Users",
      value: data.contentMetrics.monthly.totalCategory,
      color: "#10B981",
    },
    {
      title: "Referrals",
      value: data.contentMetrics.monthly.totalPostExitCount,
      color: "#10B981",
    },
    {
      title: "Created",
      value: data.contentMetrics.monthly.totalPostShares,
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
            data={data.contentMetrics.daily.chartData}
            xLabel="Time"
            yLabel="User Count"
          />
        </div>
        <div className="w-full rounded">
          <SimpleLineChart
            title="Monthly User Metrics"
            data={data.contentMetrics.monthly.chartData}
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

export default ContentMetricsDashboardLayout;
