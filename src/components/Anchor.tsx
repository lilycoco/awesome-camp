import React from "react";

export default function Anchor({
  url,
  children,
  className,
}: {
  url?: string;
  children?: string | React.ReactElement;
  className?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={"text-blue-700 " + className}
    >
      {children}
    </a>
  );
}
