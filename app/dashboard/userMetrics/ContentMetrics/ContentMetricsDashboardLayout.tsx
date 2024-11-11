import React from "react";
import SimpleLineChart from "../../../../components/SimpleLineChart";
import { useDashboardData } from "@/hooks/useDashboardData";
import MetricCard from "../../../../components/MetricCard";
import MetricsSection from "../../../../components/MetricsSection";

function ContentMetricsDashboardLayout() {
  // Assuming `data` comes from the `useDashboardData` hook
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  // All-time metrics from the provided data
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
      title: "Total Post Shares",
      value: data.contentMetrics.allTime.totalPostShares,
      color: "#3B82F6",
    },
    {
      title: "Total Views",
      value: data.contentMetrics.allTime.totalViews,
      color: "#3B82F6",
    },
    {
      title: "Total Comments",
      value: data.contentMetrics.allTime.totalComments,
      color: "#3B82F6",
    },
    {
      title: "Total Post Blocked",
      value: data.contentMetrics.allTime.totalPostBlocked,
      color: "#3B82F6",
    },
    {
      title: "Total Post Deleted",
      value: data.contentMetrics.allTime.totalPostDeleted,
      color: "#3B82F6",
    },
  ];

  // Daily metrics from the provided data
  const dailyMetrics = [
    {
      title: "Total Posts",
      value: data.contentMetrics.daily.totalPosts,
      color: "#10B981",
    },
    {
      title: "Total Category",
      value: data.contentMetrics.daily.totalCategory,
      color: "#10B981",
    },
    {
      title: "Total Post Exit Count",
      value: data.contentMetrics.daily.totalPostExitCount,
      color: "#10B981",
    },
    {
      title: "Total Post Shares",
      value: data.contentMetrics.daily.totalPostShares,
      color: "#10B981",
    },
    {
      title: "Total Views",
      value: data.contentMetrics.daily.totalViews,
      color: "#10B981",
    },
    {
      title: "Total Comments",
      value: data.contentMetrics.daily.totalComments,
      color: "#10B981",
    },
    {
      title: "Total Post Blocked",
      value: data.contentMetrics.daily.totalPostBlocked,
      color: "#10B981",
    },
    {
      title: "Total Post Deleted",
      value: data.contentMetrics.daily.totalPostDeleted,
      color: "#10B981",
    },
  ];

  // Monthly metrics from the provided data
  const monthlyMetrics = [
    {
      title: "Total Posts",
      value: data.contentMetrics.monthly.totalPosts,
      color: "#10B981",
    },
    {
      title: "Total Category",
      value: data.contentMetrics.monthly.totalCategory,
      color: "#10B981",
    },
    {
      title: "Total Post Exit Count",
      value: data.contentMetrics.monthly.totalPostExitCount,
      color: "#10B981",
    },
    {
      title: "Total Post Shares",
      value: data.contentMetrics.monthly.totalPostShares,
      color: "#10B981",
    },
    {
      title: "Total Views",
      value: data.contentMetrics.monthly.totalViews,
      color: "#10B981",
    },
    {
      title: "Total Comments",
      value: data.contentMetrics.monthly.totalComments,
      color: "#10B981",
    },
    {
      title: "Total Post Blocked",
      value: data.contentMetrics.monthly.totalPostBlocked,
      color: "#10B981",
    },
    {
      title: "Total Post Deleted",
      value: data.contentMetrics.monthly.totalPostDeleted,
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
