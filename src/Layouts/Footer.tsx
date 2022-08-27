import React from "react";
import { pageList } from "../lib/page";
import youtube from "../assets/icon/youtube.png";
import instagram from "../assets/icon/instagram.png";
import awesome from "../assets/icon/awesome.png";
import facebook from "../assets/icon/facebook.png";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function Footer() {
  const SnsLinks = ({ className }: { className?: string }) => (
    <div className={"flex items-center gap-5 " + className}>
      <p className="whitespace-nowrap">Find Us On:</p>
      <div className="flex items-center gap-4">
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
    <footer className="font-['Helvetica'] bg-[#F7F7F7]">
      <div className="pt-10 px-10 pb-16 max-w-4xl m-auto md:flex items-start gap-32">
        <SnsLinks className="hidden md:block" />
        <div className="flex flex-col flex-wrap h-48 w-72 justify-between mb-12 md:mb-0">
          {pageList.map(({ enTitle, jaTitle, url }, index) => (
            <Link key={index} className="flex flex-col w-32" to={url}>
              <span className="font-bold">{enTitle}</span>
              <span className="text-xs"> {jaTitle}</span>
            </Link>
          ))}
        </div>
        <SnsLinks className="block md:hidden mb-12" />
        <Link to="/">
          <img src={awesome} alt="icon" className="mb-3 w-32 m-auto" />
        </Link>
      </div>
      <p className="text-center text-sm pb-5">©︎2022 Awesome Camp & Glamping</p>
    </footer>
  );
}
