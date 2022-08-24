import React from "react";

export default function RecommendContent({
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
    <div
      className={
        "flex justify-between w-full gap-10 scroll-reveal " + className
      }
    >
      <div className="w-full max-w-lg">
        <h2 className="mb-5 text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <img src={src} alt="recommend" className="max-w-lg h-80 object-cover" />
    </div>
  );
}
