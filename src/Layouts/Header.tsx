import Hamburger from "hamburger-react";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import awesome from "../assets/icon/awesome.png";
import Icon from "../components/Icon";
import { pageList } from "../lib/page";
import { snsLinks } from "../lib/snsLinks";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const snsLink = () =>
    snsLinks.map(({ href, src, alt }) => (
      <Icon key={href} href={href} src={src} alt={alt} />
    ));

  return (
    <header className="sticky top-0 z-20 bg-white p-3 font-['Helvetica'] opacity-95 shadow-sm md:-top-12">
      <div className="relative z-10">
        <Link to="/">
          <img
            src={awesome}
            alt="icon"
            className="m-auto mb-1 w-16 hover:scale-105"
          />
        </Link>
        <div className="absolute right-0 -top-1 block md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <nav className="sticky top-0 hidden items-center justify-center gap-10 whitespace-nowrap md:flex">
        {pageList.map(({ enTitle, jaTitle, url }, index) => (
          <Link
            key={index}
            to={url}
            className="flex flex-col items-center hover:scale-105"
          >
            <span className="font-bold">{enTitle}</span>
            <span className="text-xs"> {jaTitle}</span>
          </Link>
        ))}
        <div className="flex gap-5">{snsLink()}</div>
      </nav>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-white">
          <div className="">
            {pageList.map(({ enTitle, jaTitle, url }, index) => (
              <Link
                key={index}
                to={url}
                className="mb-4 flex flex-row items-center gap-2"
              >
                <span className="text-lg font-bold">{enTitle}</span>/
                <span className="text-xs"> {jaTitle}</span>
              </Link>
            ))}
            <div className="mt-16 flex gap-4">{snsLink()}</div>
          </div>
        </div>
      )}
    </header>
  );
}
