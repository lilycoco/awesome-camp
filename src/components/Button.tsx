import React from "react";

export default function Button({
  url,
  label,
}: {
  url?: string;
  label?: string;
}) {
  return (
    <button
      className="bg-white text-green min-w-[200px] h-10 m-auto block border-2 border-green"
      onClick={() => {}}
    >
      {label?.toUpperCase()}
    </button>
  );
}
