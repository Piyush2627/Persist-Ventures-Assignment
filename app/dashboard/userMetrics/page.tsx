"use client";
import Card from "@/components/Card";
import DashboardLayout from "@/components/DashboardLayout";
import { useDashboardData } from "@/hooks/useDashboardData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

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
        <DashboardLayout />
      </Card>
    </div>
  );
}

export default UserMetrics;
