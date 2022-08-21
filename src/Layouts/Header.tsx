import React from "react";
import { pageList } from "../lib/page";
import awesome from "../assets/logo/awesome.png";
import youtube from "../assets/logo/youtube.png";
import instagram from "../assets/logo/instagram.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-5 sticky top-0 bg-white font-['Helvetica']">
      <img src={awesome} alt="logo" className="w-20 mb-3 m-auto" />
      <nav className="flex justify-center gap-10 whitespace-nowrap items-center">
        {pageList.map(({ enTitle, jaTitle, url }, index) => (
          <Link key={index} to={url} className="flex flex-col items-center">
            <span className="font-bold">{enTitle}</span>
            <span className="text-xs"> {jaTitle}</span>
          </Link>
        ))}
        <img src={youtube} alt="youtube" className="h-4" />
        <img src={instagram} alt="youtube" className="h-4" />
      </nav>
    </header>
  );
}
