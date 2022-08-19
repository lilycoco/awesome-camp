import React from "react";
import { pageList } from "../lib/page";
import awesome from "../assets/logo/awesome.png";
import youtube from "../assets/logo/youtube.png";
import instagram from "../assets/logo/instagram.png";

export default function Header() {
  return (
    <header className="p-5 sticky top-0 bg-white">
      <img src={awesome} alt="logo" className="w-20 mb-3 m-auto" />
      <div className="flex justify-center gap-10 whitespace-nowrap items-center">
        {pageList.map((item, index) => (
          <div key={index}>
            <a
              className="flex flex-col items-center"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold">{item.enTitle}</span>
              <span className="text-xs"> {item.jaTitle}</span>
            </a>
          </div>
        ))}
        <img src={youtube} alt="youtube" className="h-4" />
        <img src={instagram} alt="youtube" className="h-4" />
      </div>
    </header>
  );
}
