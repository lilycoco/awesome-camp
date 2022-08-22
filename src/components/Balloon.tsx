import { Link } from "react-router-dom";

export default function Balloon() {
  return (
    <Link
      to="/contact"
      className="balloon fixed bottom-14 right-14 font-oleo text-2xl py-4 px-6 rounded-full bg-yellow shadow-md"
    >
      Contact Us
    </Link>
  );
}
