import React from "react";
import Balloon from "../../components/Balloon";
import ReportCard from "../../components/ReportCard";
import Title from "../../components/Title";
import { reportList } from "../../lib/report";

export default function Report() {
  return (
    <div>
      <Title enLabel="Wedding Report" className="m-auto pt-24" />
      <section className="flex flex-wrap gap-5 mb-10 py-24 max-w-screen-lg m-auto">
        {reportList.map((report, index) => (
          <ReportCard key={index} report={report} />
        ))}
      </section>
      <Balloon />
    </div>
  );
}
