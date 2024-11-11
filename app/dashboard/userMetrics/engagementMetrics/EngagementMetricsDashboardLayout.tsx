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
      title: "Total Users",
      value: data.engagementMetrics.allTime.totalLikes,
      color: "#4F46E5",
    },
    {
      title: "Active Users",
      value: (
        (data.engagementMetrics.allTime.totalCategory /
          data.engagementMetrics.allTime.totalLikes) *
        100
      ).toFixed(2),
      color: "#F59E0B",
    },
    {
      title: "Total Referrals",
      value: data.engagementMetrics.allTime.totalViews,
      color: "#10B981",
    },
    {
      title: "totalNotificationss",
      value: data.engagementMetrics.allTime.totalNotifications,
      color: "#3B82F6",
    },
  ];

  const dailyMetrics = [
    {
      title: "Total Users",
      value: data.engagementMetrics.daily.totalLikes,
      color: "#10B981",
    },
    {
      title: "Active Users",
      value: data.engagementMetrics.daily.totalCategory,
      color: "#10B981",
    },
    {
      title: "Referrals",
      value: data.engagementMetrics.daily.totalViews,
      color: "#10B981",
    },
    {
      title: "Created",
      value: data.engagementMetrics.daily.totalNotifications,
      color: "#10B981",
    },
  ];

  const monthlyMetrics = [
    {
      title: "Total Users",
      value: data.engagementMetrics.monthly.totalLikes,
      color: "#10B981",
    },
    {
      title: "Active Users",
      value: data.engagementMetrics.monthly.totalCategory,
      color: "#10B981",
    },
    {
      title: "Referrals",
      value: data.engagementMetrics.monthly.totalViews,
      color: "#10B981",
    },
    {
      title: "Created",
      value: data.engagementMetrics.monthly.totalNotifications,
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
            description={`Total ${metric.title.toLowerCase()} on the platform.`}
            color={metric.color}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <MetricsSection sectionTitle="Daily" metrics={dailyMetrics} />
        <MetricsSection sectionTitle="Monthly" metrics={monthlyMetrics} />
      </div>

      <div className="flex space-x-4 rounded pt-2">
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
    </div>
  );
}

export default EngagementMetricsDashboardLayout;
