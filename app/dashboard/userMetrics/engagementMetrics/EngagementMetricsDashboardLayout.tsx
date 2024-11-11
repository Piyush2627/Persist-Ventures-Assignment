import React from "react";
import SimpleLineChart from "../../../../components/SimpleLineChart";
import { useDashboardData } from "@/hooks/useDashboardData";
import MetricCard from "../../../../components/MetricCard";
import MetricsSection from "../../../../components/MetricsSection";

function EngagementMetricsDashboardLayout() {
  const { data, isLoading, isError } = useDashboardData();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  const allTimeMetrics = [
    {
      title: "Total Likes",
      value: data.engagementMetrics.allTime.totalLikes,
      color: "#4F46E5",
    },
    {
      title: "Total  Views",
      value: data.engagementMetrics.allTime.totalViews,
      color: "#F59E0B",
    },
    {
      title: "Total  Notifications",
      value: data.engagementMetrics.allTime.totalNotifications,
      color: "#10B981",
    },
    {
      title: "Total Message",
      value: data.engagementMetrics.allTime.totalMessage,
      color: "#3B82F6",
    },
    {
      title: "Private Chats",
      value: data.engagementMetrics.allTime.privateChats,
      color: "#3B82F6",
    },
  ];

  const dailyMetrics = [
    {
      title: "Total links",
      value: data.engagementMetrics.daily.totalLikes,
      color: "#10B981",
    },
    {
      title: "Total Views",
      value: data.engagementMetrics.daily.totalViews,
      color: "#10B981",
    },
    {
      title: "Total Notifications",
      value: data.engagementMetrics.daily.totalNotifications,
      color: "#10B981",
    },
    {
      title: "Total Message",
      value: data.engagementMetrics.daily.totalMessage,
      color: "#10B981",
    },
    {
      title: "Private Chats",
      value: data.engagementMetrics.daily.privateChats,
      color: "#10B981",
    },
  ];

  const monthlyMetrics = [
    {
      title: "Total Likes",
      value: data.engagementMetrics.monthly.totalLikes,
      color: "#10B981",
    },
    {
      title: "Total Viewer",
      value: data.engagementMetrics.monthly.totalViews,
      color: "#10B981",
    },
    {
      title: "Total Notifications",
      value: data.engagementMetrics.monthly.totalNotifications,
      color: "#10B981",
    },
    {
      title: "rivate Chats",
      value: data.engagementMetrics.monthly.privateChats,
      color: "#10B981",
    },
    {
      title: "Total Message",
      value: data.engagementMetrics.monthly.totalMessage,
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
            data={data.engagementMetrics.daily.chartData}
            xLabel="Time"
            yLabel="User Count"
          />
        </div>
        <div className="w-full rounded">
          <SimpleLineChart
            title="Monthly User Metrics"
            data={data.engagementMetrics.monthly.chartData}
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

export default EngagementMetricsDashboardLayout;
