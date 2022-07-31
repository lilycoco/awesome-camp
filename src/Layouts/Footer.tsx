import React from "react";
import { pageList } from "../lib/page";

export default function Footer() {
  return (
    <footer>
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
    </footer>
  );
}
