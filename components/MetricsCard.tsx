interface MetricsCardProps {
  type: string;
  Icon: React.ReactNode;
}
function MetricsCard({ type, Icon }: MetricsCardProps) {
  return (
    <div className="border-blue-zinc-100 relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 bg-clip-border text-zinc-700 shadow-sm">
      <div className="flex justify-between p-4 text-right">
        {Icon}
        <div className="block text-xl font-bold leading-normal text-zinc-400 antialiased">
          {type}
        </div>
      </div>
    </div>
  );
}

export default MetricsCard;
