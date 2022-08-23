import React from "react";

export default function ReportCard({
  report: { imgUrl, location, spaceName, date, report, youtube },
}: {
  report: {
    imgUrl: string;
    location: string;
    spaceName: string;
    date: string;
    report?: string;
    youtube?: string;
  };
}) {
  return (
    <div className="min-w-fit mb-10">
      <div className="w-80 mb-2">
        <div className="w-full h-0 relative pt-[56.25%]">
          {youtube ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtube}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          ) : (
            <img
              src={imgUrl}
              alt="report"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="w-80">
        <div className="flex justify-between item-start text-xs ">
          <p>{location}</p>
          {report && (
            <a
              className="font-bold border border-black px-2 font-['Helvetica']"
              href={report}
            >
              REPORT
            </a>
          )}
        </div>
        <p className="text-sm">{spaceName}</p>
      </div>
    </div>
  );
}
