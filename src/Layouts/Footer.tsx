import React from "react";
import { pageList } from "../lib/page";
import youtube from "../assets/logo/youtube.png";
import instagram from "../assets/logo/instagram.png";
import awesome from "../assets/logo/awesome.png";
import facebook from "../assets/logo/facebook.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-['Helvetica'] bg-[#F7F7F7]">
      <div className="pt-10 pb-16 max-w-4xl m-auto flex items-start gap-32">
        <div className="flex items-center gap-5">
          <p className="whitespace-nowrap">Find Us On:</p>
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
        <div className="flex flex-col flex-wrap h-48 w-72 justify-between">
          {pageList.map(({ enTitle, jaTitle, url }, index) => (
            <Link key={index} className="flex flex-col w-32" to={url}>
              <span className="font-bold">{enTitle}</span>
              <span className="text-xs"> {jaTitle}</span>
            </Link>
          ))}
        </div>
        <Link to="/">
          <img src={awesome} alt="logo" className="mb-3 w-32 m-auto" />
        </Link>
      </div>
      <p className="text-center text-sm pb-5">©︎2022 Awesome Camp & Glamping</p>
    </footer>
  );
}
