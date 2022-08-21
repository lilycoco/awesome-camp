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
    <div className="min-w-fit mb-4">
      <div className="w-80 h-56 mb-2">
        <img src={imgUrl} alt="report" className="h-full w-auto" />
      </div>
      <p className="text-xs font-bold">{date}</p>
      <p className="">
        {spaceName}
        <span className="text-xs ml-2">{`(${location})`}</span>
      </p>
    </div>
  );
}
