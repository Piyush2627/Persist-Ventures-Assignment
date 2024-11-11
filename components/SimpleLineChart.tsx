"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

interface ChartData {
  timestamp: string;
  count: number;
}

interface SimpleLineChartProps {
  title: string;
  data?: ChartData[]; // Making data optional to handle undefined
  xLabel: string;
  yLabel: string;
  color?: string;
}

export default function SimpleLineChart({
  title,
  data,
  xLabel,
  color = "#4F46E5",
}: SimpleLineChartProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    if (data) {
      // Check if data is defined
      const formattedData = data.map((entry) => ({
        timestamp: dayjs(entry.timestamp).format("DD-MM-YYYY HH:mm"),
        count: entry.count,
      }));
      setChartData(formattedData);
    }
  }, [data]);

  // Display loading message if data is still undefined or empty
  if (!data) return <div>Loading chart...</div>;

  return (
    <div className="chart-container">
      <h3 className="chart-title text-lg font-semibold">{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            stroke="#e0e0e0"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="timestamp"
            tick={{ fill: "#4B5563", fontSize: 10 }}
            tickLine={false}
            label={{
              value: xLabel,
              position: "insideBottom",
              offset: -5,
              fill: "#6B7280",
            }}
          />
          <YAxis
            tick={{ fill: "#4B5563", fontSize: 12 }}
            tickLine={false}
            label={{
              value: "Count",
              angle: -90,
              position: "insideLeft",
              fill: "#6B7280",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1F2937",
              borderRadius: "8px",
              color: "#FFF",
            }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke={color}
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
