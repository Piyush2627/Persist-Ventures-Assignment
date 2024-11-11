"use client";
import Card from "@/components/Card";
import EngagementMetricsDashboardLayout from "@/app/dashboard/userMetrics/engagementMetrics/EngagementMetricsDashboardLayout";
import { useDashboardData } from "@/hooks/useDashboardData";
import React from "react";

function EngagementPage() {
  const { data, isError, isLoading } = useDashboardData();
  console.log(data.userMetrics.allTime.totalUser);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <div>
      <Card>
        <EngagementMetricsDashboardLayout />
      </Card>
    </div>
  );
}

export default EngagementPage;
