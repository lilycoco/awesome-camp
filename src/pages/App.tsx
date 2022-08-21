import Home from "./home/Home";
import Guide from "./guide/Guide";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guide" element={<Guide />} />
        <Route path="guide" element={<Guide />} />
      </Routes>
      <div className="balloon fixed bottom-14 right-14 font-sans text-2xl py-4 px-6 rounded-full bg-yellow shadow-md">
        Contact Us
      </div>
      <Footer />
    </BrowserRouter>
  );
}
