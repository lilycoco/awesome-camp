import React from "react";
import { pageList } from "../lib/page";
import awesome from "../assets/logo/awesome.png";
import youtube from "../assets/logo/youtube.png";
import facebook from "../assets/logo/facebook.png";
import instagram from "../assets/logo/instagram.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-5 sticky bg-white font-['Helvetica'] z-20 shadow-sm -top-16 opacity-90">
      <Link to="/">
        <img src={awesome} alt="logo" className="w-20 mb-3 m-auto" />
      </Link>
      <nav className="flex justify-center gap-10 whitespace-nowrap items-center sticky top-0">
        {pageList.map(({ enTitle, jaTitle, url }, index) => (
          <Link key={index} to={url} className="flex flex-col items-center">
            <span className="font-bold">{enTitle}</span>
            <span className="text-xs"> {jaTitle}</span>
          </Link>
        ))}
        <div className="flex gap-6">
          <a
            href="https://www.youtube.com/channel/UCPglpd7wKzyBYzc4GKcfr3g?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="youtube" className="h-4" />
          </a>
          <a
            href="https://www.instagram.com/awesome_camp_inc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="instagram" className="h-4" />
          </a>
          <a
            href="https://www.facebook.com/awesomebarbecue.glamping/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="facebook" className="h-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
