import React from "react";

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="h-2.5 w-full rounded-full bg-zinc-200">
      <div
        className="h-2.5 rounded-full bg-blue-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: number | string;
  isPercentage?: boolean;
  color: string;
  showProgressBar?: boolean;
  max?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  isPercentage = false,
  color,
  showProgressBar = false,
  max = 100,
}) => {
  const displayValue = isPercentage ? `${value}%` : value;

  return (
    <div
      className="flex flex-col items-center justify-between rounded-lg border-l-4 bg-zinc-800 p-6 shadow-md sm:p-4 md:p-6 lg:p-8"
      style={{ borderColor: color }}
    >
      <h3 className="text-lg font-semibold text-zinc-200 sm:text-base md:text-lg lg:text-xl">
        {title}
      </h3>
      <p className="text-4xl font-bold text-zinc-200 sm:text-3xl md:text-4xl lg:text-5xl">
        {displayValue}
      </p>
      {showProgressBar && max && (
        <ProgressBar value={Number(value)} max={max} />
      )}
    </div>
  );
};

export default MetricCard;
