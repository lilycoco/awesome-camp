import React from "react";
import { pageList } from "../lib/page";
import awesome from "../assets/icon/awesome.png";
import youtube from "../assets/icon/youtube.png";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";
import Hamburger from "hamburger-react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const snsLinks = () => (
    <>
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
    </>
  );

  return (
    <header className="p-3 sticky bg-white font-['Helvetica'] z-20 shadow-sm top-0 md:-top-12 opacity-90">
      <div className="z-10 relative">
        <Link to="/">
          <img src={awesome} alt="icon" className="w-16 mb-1 m-auto" />
        </Link>
        <div className="block absolute right-0 -top-1 md:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      <nav className="hidden md:flex justify-center gap-10 whitespace-nowrap items-center sticky top-0">
        {pageList.map(({ enTitle, jaTitle, url }, index) => (
          <Link key={index} to={url} className="flex flex-col items-center">
            <span className="font-bold">{enTitle}</span>
            <span className="text-xs"> {jaTitle}</span>
          </Link>
        ))}
        <div className="flex gap-6">
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
      </nav>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-white flex justify-center items-center">
          <div className="">
            {pageList.map(({ enTitle, jaTitle, url }, index) => (
              <Link
                key={index}
                to={url}
                className="flex flex-row items-center mb-4 gap-2"
              >
                <span className="font-bold">{enTitle}</span>/
                <span className="text-xs"> {jaTitle}</span>
              </Link>
            ))}
            <div className="flex gap-4 mt-16">{snsLinks()}</div>
          </div>
        </div>
      )}
    </header>
  );
}
