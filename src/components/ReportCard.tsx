import React from "react";

export default function ReportCard({
  imgUrl,
  location,
  spaceName,
}: {
  imgUrl: string;
  location: string;
  spaceName: string;
}) {
  return (
    <div className="min-w-fit">
      <div className="w-80 h-56 mb-3">
        <img src={imgUrl} alt="report" className="h-full w-auto" />
      </div>
      <p className="text-xs">{location}</p>
      <p className="text-xl">{spaceName}</p>
    </div>
  );
}
