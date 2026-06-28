import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="py-8 px-6">
      <nav className="max-w-4xl mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="SentFromMy Logo" className="h-10" />
        </Link>
      </nav>
    </header>
  );
}
