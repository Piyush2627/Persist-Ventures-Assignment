// MetricsSection.tsx

import React from "react";
import DashboardMetricsCard from "./DashboardMetricCard";

interface Metric {
  title: string;
  value: number | string;
  color: string;
}

interface MetricsSectionProps {
  sectionTitle: string;
  metrics: Metric[];
}

const MetricsSection: React.FC<MetricsSectionProps> = ({
  sectionTitle,
  metrics,
}) => {
  return (
    <div className="w-full rounded border border-zinc-700 p-6">
      <h1 className="text-4xl font-semibold">{sectionTitle}</h1>
      <div className=" ">
        {metrics.map((metric) => (
          <DashboardMetricsCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
