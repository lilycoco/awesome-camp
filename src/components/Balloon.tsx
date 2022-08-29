import { Link } from "react-router-dom";

export default function Balloon() {
  return (
    <Link
      to="/contact"
      className="balloon fixed bottom-10 right-8 z-10 rounded-full bg-yellow py-4 px-6 font-oleo text-2xl shadow-md md:right-12"
    >
      Contact Us
    </Link>
  );
}
