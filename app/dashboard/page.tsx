"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Dashboard() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Posts"],
    queryFn: async () => {
      const response = await axios.get("/api/admin/dashboard");
      return response.data.dashboard;
    },
  });

  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  console.log();

  return <div>{data.userMetrics.daily.totalUser}</div>;
}
export default Dashboard;
