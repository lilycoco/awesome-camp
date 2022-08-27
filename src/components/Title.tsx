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
    <h1 className={"w-fit mb-14 md:mb-20 font-oleo text-6xl " + className}>
      {enLabel}
    </h1>
  );
}
