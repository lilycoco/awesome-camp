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
    <div className="mb-10 min-w-fit">
      <div className="mb-2 w-80">
        <div className="relative h-0 w-full pt-[56.25%]">
          {youtube ? (
            <iframe
              className="absolute top-0 left-0 h-full w-full"
              src={`https://www.youtube.com/embed/${youtube}?controls=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          ) : (
            <img
              src={imgUrl}
              alt="report"
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="w-80">
        <div className="item-start flex justify-between text-xs ">
          <p>{location}</p>
          {report && (
            <a
              className="border border-black px-2 font-['Helvetica'] font-bold shadow"
              href={report}
              target="_blank"
              rel="noreferrer"
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
