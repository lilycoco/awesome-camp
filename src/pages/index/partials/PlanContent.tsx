import React from "react";

export default function PlanContent({
  title,
  description,
  className,
  src,
}: {
  title: string;
  description: string;
  className?: string;
  src: string;
}) {
  return (
    <div className="w-1/2 relative ">
      <div className="after:content-[''] after:absolute after:bg-gradient-to-r after:from-black after:top-0 after:left-0 after:w-1/2 after:h-full">
        <img src={src} alt="top" className="w-auto" />
      </div>
      <div className="absolute top-10 left-10 text-white">
        <p className="text-5xl font-extrabold mb-3">{title}</p>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
}
