import { FaUser } from "react-icons/fa";
interface MetricsCardProps {
  type: string;
  counts: number;
}
function MetricsCard({ type, counts }: MetricsCardProps) {
  return (
    <div className="border-blue-zinc-100 relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900 bg-clip-border text-zinc-700 shadow-sm">
      <div className="absolute mx-4 mt-4 grid size-8 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 bg-clip-border text-white shadow-zinc-900/20">
        <FaUser />
      </div>
      <div className="p-4 text-right">
        <div className="block font-sans text-sm font-normal leading-normal text-zinc-400 antialiased">
          {type}
        </div>
        <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-zinc-400 antialiased">
          {counts}
        </h4>
      </div>
    </div>
  );
}

export default MetricsCard;
