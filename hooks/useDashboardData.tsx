"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchDashboardData = async () => {
  const response = await axios.get("/api/admin/dashboard");
  return response.data.dashboard;
};

export const useDashboardData = () => {
  return useQuery({
    queryKey: ["Posts"],
    queryFn: fetchDashboardData,
  });
};
