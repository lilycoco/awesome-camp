import React from "react";
import { Link } from "react-router-dom";

import awesome from "../assets/icon/awesome.png";
import Icon from "../components/Icon";
import { pageList } from "../lib/page";
import { snsLinks } from "../lib/snsLinks";

export default function Footer() {
  const SnsLinks = ({ className }: { className?: string }) => (
    <div className="m-auto mt-12 flex items-center justify-center gap-5">
      {snsLinks.map(({ href, src, alt }) => (
        <Icon key={href} href={href} src={src} alt={alt} />
      ))}
    </div>
  );

  return (
    <footer className="bg-[#F7F7F7] font-['Helvetica']">
      <div className="m-auto max-w-2xl items-center justify-between gap-32 px-10 pt-10 pb-16 md:flex">
        <div className="mb-16 flex h-48 w-full flex-col flex-wrap justify-between md:mb-5 md:w-112">
          {pageList.map(({ enTitle, jaTitle, url }, index) => (
            <Link
              key={index}
              className="flex w-32 flex-col hover:scale-105"
              to={url}
            >
              <span className="font-bold">{enTitle}</span>
              <span className="text-xs"> {jaTitle}</span>
            </Link>
          ))}
        </div>
        <div className="m-auto w-fit md:m-0">
          <Link to="/">
            <img
              src={awesome}
              alt="icon"
              className="m-auto mb-3 w-32 hover:scale-105"
            />
          </Link>
          <SnsLinks />
        </div>
      </div>
      <p className="pb-5 text-center text-sm">©︎2022 Awesome Camp & Glamping</p>
    </footer>
  );
}
