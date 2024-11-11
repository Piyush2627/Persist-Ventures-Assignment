import React from "react";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
function Button({ onClick, children, className }: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={twMerge(
          "rounded border border-blue-600 bg-blue-600 px-2 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
