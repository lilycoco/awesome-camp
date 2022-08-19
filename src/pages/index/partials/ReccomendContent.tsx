import React from "react";

export default function ReccomendContent({
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
    <div className={"flex gap-20 scroll-reveal " + className}>
      <div className="w-112">
        <h2 className="mb-5 text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <img src={src} alt="reccomend" className="w-125 h-80 object-cover" />
    </div>
  );
}
