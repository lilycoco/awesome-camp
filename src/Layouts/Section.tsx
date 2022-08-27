import React from "react";

export default function Section({
  sectionClass,
  wrapperClass,
  children,
  backgroundColor = false,
}: {
  sectionClass?: string;
  wrapperClass?: string;

  children?: React.ReactElement | React.ReactElement[];
  backgroundColor?: boolean;
}) {
  const wrapperStyle =
    "px-5 " + wrapperClass + (backgroundColor ? " gradient-gray" : "");

  const sectionStyle = " md:px-0 py-24 max-w-screen-lg m-auto " + sectionClass;

  return (
    <section className={wrapperStyle}>
      <div className={sectionStyle}>{children}</div>
    </section>
  );
}
