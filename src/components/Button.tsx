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
      className="bg-green text-white min-w-[200px] text-base h-10 m-auto block"
      onClick={() => {}}
    >
      {label?.toUpperCase()}
    </button>
  );
}
