import React from "react";
import Balloon from "../../components/Balloon";
import Title from "../../components/Title";
import { scheduleList } from "../../lib/schedule";

export default function Schedule() {
  return (
    <div className="bg-light-brown-gray py-24">
      <Title enLabel="Schedule" className="m-auto mb-24" />
      <section className="m-auto w-fit">
        <div className="">
          {scheduleList.map(({ title, description }, index) => (
            <div className="flex gap-10 relative">
              <div className="absolute border-l-2 border-black h-full left-10" />
              <div className="font-oleo text-3xl w-20 h-20 flex items-center justify-center rounded-full bg-white border-2 border-black z-10">{`0${
                index + 1
              }`}</div>
              <div key={index} className="mt-5 mb-16 max-w-screen-sm">
                <h2 className="font-bold text-2xl mb-4">{title}</h2>
                <div>{description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Balloon />
    </div>
  );
}
