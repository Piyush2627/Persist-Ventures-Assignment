"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Dashboard() {
  // Accessing the environment variable

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

  return data;
}

export default Dashboard;
