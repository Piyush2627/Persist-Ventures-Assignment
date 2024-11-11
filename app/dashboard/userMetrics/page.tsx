"use client";
import Card from "@/components/Card";
import UserMetricsDashboardLayout from "@/app/dashboard/userMetrics/UserMetricsDashboardLayout";
import { useDashboardData } from "@/hooks/useDashboardData";
import React from "react";

function UserMetrics() {
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
        <UserMetricsDashboardLayout />
      </Card>
    </div>
  );
}

export default UserMetrics;
