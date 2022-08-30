import React from "react";
import { Link } from "react-router-dom";

import awesome from "../assets/icon/awesome.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import youtube from "../assets/icon/youtube.png";
import Icon from "../components/Icon";
import { pageList } from "../lib/page";

export default function Footer() {
  const SnsLinks = ({ className }: { className?: string }) => (
    <div className={"flex items-center gap-5 " + className}>
      <p className="whitespace-nowrap">Find Us On:</p>
      <div className="flex items-center gap-5">
        <Icon
          href="https://www.youtube.com/channel/UCPglpd7wKzyBYzc4GKcfr3g?view_as=subscriber"
          src={youtube}
          alt="youtube"
        />
        <Icon
          href="https://www.instagram.com/awesome_camp_inc/"
          src={instagram}
          alt="instagram"
        />
        <Icon
          href="https://www.facebook.com/awesomebarbecue.glamping/"
          src={facebook}
          alt="facebook"
        />
      </div>
    </div>
  );

  return (
    <footer className="bg-[#F7F7F7] font-['Helvetica']">
      <div className="m-auto max-w-4xl items-start gap-32 px-10 pt-10 pb-16 md:flex">
        <SnsLinks className="hidden md:flex" />
        <div className="mb-12 flex h-48 w-72 flex-col flex-wrap justify-between md:mb-0">
          {pageList.map(({ enTitle, jaTitle, url }, index) => (
            <Link key={index} className="flex w-32 flex-col" to={url}>
              <span className="font-bold">{enTitle}</span>
              <span className="text-xs"> {jaTitle}</span>
            </Link>
          ))}
        </div>
        <SnsLinks className="mb-12 block md:hidden" />
        <Link to="/">
          <img src={awesome} alt="icon" className="m-auto mb-3 w-32" />
        </Link>
      </div>
      <p className="pb-5 text-center text-sm">©︎2022 Awesome Camp & Glamping</p>
    </footer>
  );
}
