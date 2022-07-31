import React from "react";
import { pageList } from "../lib/page";
import logo_awesome from "../assets/images/logo_awesome.png";
import logo_youtube from "../assets/images/logo_youtube.png";
import logo_instagram from "../assets/images/logo_instagram.png";

export default function Header() {
  return (
    <header className="p-5 sticky top-0 bg-white">
      <img src={logo_awesome} alt="logo" className="w-20 mb-3 m-auto" />
      <div className="flex justify-center gap-10 whitespace-nowrap items-center">
        {pageList.map((item, index) => (
          <div key={index}>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.enTitle}
            </a>
          </div>
        ))}
        <img src={logo_youtube} alt="youtube" className="h-4" />
        <img src={logo_instagram} alt="youtube" className="h-4" />
      </div>
    </header>
  );
}
