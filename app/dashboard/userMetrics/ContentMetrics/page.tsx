"use client";
import Card from "@/components/Card";
import ContentMetricsDashboardLayout from "@/app/dashboard/userMetrics/ContentMetrics/ContentMetricsDashboardLayout";
import { useDashboardData } from "@/hooks/useDashboardData";
import React from "react";

function ContentMetrics() {
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
        <ContentMetricsDashboardLayout />
      </Card>
    </div>
  );
}

export default ContentMetrics;
