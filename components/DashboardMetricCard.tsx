interface DashboardMetricsCardProps {
  title: string;
  value: string | number;
}

const DashboardMetricsCard: React.FC<DashboardMetricsCardProps> = ({
  title,
  value,
}) => {
  return (
    <div className="flex items-center space-x-3 rounded border border-zinc-700 p-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardMetricsCard;
