import React from "react";

export default function Title({
  enLabel,
  jaLabel,
  className,
}: {
  enLabel: string;
  jaLabel?: string;
  className?: string;
}) {
  return (
    <h1 className={"text-brown w-fit m-auto text-center mb-10 " + className}>
      <p className="text-3xl">{enLabel}</p>
      <p>{jaLabel}</p>
    </h1>
  );
}
