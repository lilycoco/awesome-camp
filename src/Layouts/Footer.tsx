import React from "react";
import { pageList } from "../lib/page";
import youtube from "../assets/logo/youtube.png";
import instagram from "../assets/logo/instagram.png";
import awesome from "../assets/logo/awesome.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-['Helvetica'] bg-[#F7F7F7]">
      <div className="pt-10 pb-16 px-52 flex items-start gap-32">
        <div className="flex items-center gap-5">
          <p className="whitespace-nowrap">Find Us On:</p>
          <img src={youtube} alt="youtube" className="h-4" />
          <img src={instagram} alt="youtube" className="h-4" />
        </div>
        <div className="flex flex-col flex-wrap h-48 w-72 justify-between">
          {pageList.map(({ enTitle, jaTitle, url }, index) => (
            <Link key={index} className="flex flex-col w-32" to={url}>
              <span className="font-bold">{enTitle}</span>
              <span className="text-xs"> {jaTitle}</span>
            </Link>
          ))}
        </div>
        <div>
          <img src={awesome} alt="logo" className="mb-3 w-32 m-auto" />
        </div>
      </div>
      <p className="text-center text-sm pb-5">©︎2022 Awesome Camp & Glamping</p>
    </footer>
  );
}
