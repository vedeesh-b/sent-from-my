import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Sent From My logo" className="h-10" />
          <div className="text-xl text-gray-700 tracking-tight font-medium">
            sent from my
          </div>
        </Link>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-gray-900">
              Privacy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-gray-900">
              Terms
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
