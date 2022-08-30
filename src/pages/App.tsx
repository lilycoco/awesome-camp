import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import ScrollToTop from "../ScrollToTop";
import About from "./about/About";
import Contact from "./contact/Contact";
import Guide from "./guide/Guide";
import Home from "./home/Home";
import Report from "./report/Report";
import Schedule from "./schedule/Schedule";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="guide" element={<Guide />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="report" element={<Report />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
