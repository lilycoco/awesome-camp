import React from "react";

export default function Header() {
  const headerColums = [
    { enTitle: "Home", jaTitle: "ホーム", url: "/" },
    { enTitle: "User Guide", jaTitle: "ご利用方法", url: "/guide" },
    { enTitle: "Schedule", jaTitle: "スケジュール", url: "/schedule" },
    { enTitle: "Wedding Report", jaTitle: "レポート", url: "/guide" },
    { enTitle: "About Us", jaTitle: "企業情報", url: "/guide" },
    { enTitle: "Contact", jaTitle: "お問い合わせ", url: "/guide" },
  ];

  return (
    <header>
      <div>Awesome Logo</div>
      {headerColums.map((headerColumn, index) => (
        <div key={index}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {headerColumn.enTitle}
          </a>
        </div>
      ))}
      <div>YouTube</div>
      <div>Instagram</div>
    </header>
  );
}
