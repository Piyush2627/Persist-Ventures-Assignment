import React from "react";
import { twMerge } from "tailwind-merge";
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "rounded-lg border border-zinc-800 p-4 shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
