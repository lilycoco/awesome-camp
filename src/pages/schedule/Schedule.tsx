import React from "react";
import Balloon from "../../components/Balloon";
import Title from "../../components/Title";
import Section from "../../Layouts/Section";
import { scheduleList } from "../../lib/schedule";

export default function Schedule() {
  return (
    <Section wrapperClass="bg-light-brown-gray">
      <Title enLabel="Schedule" className="m-auto mb-24" />
      <div className="m-auto w-fit">
        {scheduleList.map(({ title, description }, index) => (
          <div className="relative flex gap-5 md:gap-10" key={index}>
            <div className="absolute left-8 h-full border-l-2 border-black md:left-10" />
            <div className="z-10 flex h-16 min-w-[4rem] items-center justify-center rounded-full border-2 border-black bg-white font-oleo text-3xl md:h-20 md:min-w-[5rem]">{`0${
              index + 1
            }`}</div>
            <div key={index} className="mt-3 mb-16 max-w-screen-sm md:mt-5">
              <h2 className="mb-4 text-2xl font-bold">{title}</h2>
              <div>{description}</div>
            </div>
          </div>
        ))}
      </div>
      <Balloon />
    </Section>
  );
}
