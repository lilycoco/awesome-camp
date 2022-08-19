import React from "react";

export default function ReportCard({
  report: { imgUrl, location, spaceName, date },
}: {
  report: {
    imgUrl: string;
    location: string;
    spaceName: string;
    date: string;
  };
}) {
  return (
    <div className="min-w-fit">
      <div className="w-80 h-56 mb-3">
        <img src={imgUrl} alt="report" className="h-full w-auto" />
      </div>
      <p className="text-xs font-bold">{date}</p>
      <p>{`${spaceName} (${location})`}</p>
    </div>
  );
}
