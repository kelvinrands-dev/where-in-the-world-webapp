import { Link } from "react-router";
import { Moon } from "lucide-react";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-6 shadow-md">
      <Link
        to={"/"}
        className="font-extrabold transition-all duration-100 hover:font-black active:scale-[0.95]"
      >
        Where in the world?
      </Link>
      <button className="flex items-center gap-1 font-bold transition-all duration-100 hover:font-extrabold active:scale-[0.95]">
        <Moon className="size-4" />
        <span className="text-sm">Dark Mode</span>
      </button>
    </nav>
  );
}
