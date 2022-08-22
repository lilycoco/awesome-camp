import Home from "./home/Home";
import Guide from "./guide/Guide";
import Schedule from "./schedule/Schedule";
import Report from "./report/Report";
import About from "./about/About";
import Contact from "./contact/Contact";

import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

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
