import React from "react";

import Section from "../../Layouts/Section";
import Balloon from "../../components/Balloon";
import ReportCard from "../../components/ReportCard";
import Title from "../../components/Title";
import { reportList } from "../../lib/report";

export default function Report() {
  return (
    <Section>
      <Title enLabel="Wedding Report" className="m-auto mb-24 text-center" />
      <div className="mb-10 flex flex-wrap justify-center gap-5">
        {[...reportList].reverse().map((report, index) => (
          <ReportCard key={index} report={report} />
        ))}
      </div>
      <Balloon />
    </Section>
  );
}
