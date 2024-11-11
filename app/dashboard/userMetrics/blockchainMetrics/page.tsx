"use client";
import Card from "@/components/Card";
import { useDashboardData } from "@/hooks/useDashboardData";
import React from "react";
import BlockMetricsDashboardLayout from "./BlockMetricsDashboardLayout";

function BlockChain() {
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
        <BlockMetricsDashboardLayout />
      </Card>
    </div>
  );
}

export default BlockChain;
