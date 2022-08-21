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
    <h1 className={"w-fit text-center mb-10 font-oleo text-6xl " + className}>
      {enLabel}
    </h1>
  );
}
