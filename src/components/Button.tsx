import React from "react";

export default function Button({
  url,
  label,
  className,
}: {
  url?: string;
  label?: string;
  className?: string;
}) {
  return (
    <button
      className={
        "bg-white text-black min-w-[200px] h-8 items-center justify-center flex m-auto border-2 border-black font-bold text-sm " +
        className
      }
      onClick={() => {}}
    >
      {label?.toUpperCase()}
    </button>
  );
}
