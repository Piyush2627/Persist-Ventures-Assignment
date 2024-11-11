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
    <div className="sm:w-1/2">
      <h1 className="text-4xl font-semibold">{sectionTitle}</h1>
      <div className="mt-2 flex space-x-4">
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
