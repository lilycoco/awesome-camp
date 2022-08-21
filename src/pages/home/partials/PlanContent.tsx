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
    <div className="w-1/2 relative">
      <div className="gradation relative">
        <img src={src} alt="top" className="w-auto filter brightness-110" />
      </div>
      <div className="absolute top-10 left-10 text-white font-['Noto_Sans']">
        <p className="text-5xl font-extrabold mb-3">{title}</p>
        <p className="mb-4">{description}</p>
      </div>
    </div>
  );
}
