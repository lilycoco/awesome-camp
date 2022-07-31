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
      <div className="w-96">
        <h2 className="mb-3 text-2xl text-brown">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="w-80">
        <img src={src} alt="reccomend" className=" w-full h-auto" />
      </div>
    </div>
  );
}
