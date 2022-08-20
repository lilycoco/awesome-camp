import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./pages/index/Index";
import reportWebVitals from "./reportWebVitals";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Index />
    <Footer />
    <div className="balloon fixed bottom-14 right-14 font-sans text-2xl py-4 px-6 rounded-full bg-yellow shadow-md">
      Contact Us
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
