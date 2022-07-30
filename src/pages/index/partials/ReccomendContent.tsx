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
    <div className={"flex gap-20 " + className}>
      <div className="w-96">
        <h2 className="text-xl mb-3">{title}</h2>
        <p>{description}</p>
      </div>
      <img src={src} alt="reccomend" className="w-80" />
    </div>
  );
}
