import React from "react";
import { Link } from "react-router-dom";

export default function PlanContent({
  title,
  description,
  className,
  src,
  url,
}: {
  title: string;
  description: string;
  className?: string;
  src: string;
  url: string;
}) {
  return (
    <Link className="w-1/2 relative" to={url}>
      <div className="gradation relative">
        <img src={src} alt="top" className="w-auto filter brightness-110" />
      </div>
      <div className="absolute top-10 left-10 text-white font-['Noto_Sans']">
        <p className="text-5xl font-extrabold mb-3">{title}</p>
        <p className="mb-4">{description}</p>
      </div>
    </Link>
  );
}
