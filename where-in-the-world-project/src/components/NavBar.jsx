import { useState } from "react";
import { Link } from "react-router";
import { Moon, Sun } from "lucide-react";

export function NavBar() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light",
  );

  const handleDark = () => {
    setCurrentTheme("dark");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const handleLight = () => {
    setCurrentTheme("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };

  return (
    <nav className="dark:dark-element sticky top-0 z-50 flex items-center justify-between bg-white px-5 py-6 shadow-md md:px-8 lg:px-10">
      <Link
        to={"/"}
        className="font-extrabold transition-all duration-100 hover:font-black active:scale-[0.95] dark:font-bold"
      >
        Where in the world?
      </Link>
      {currentTheme === "light" ? (
        <button
          onClick={handleDark}
          className="flex items-center gap-1 font-bold transition-all duration-100 hover:font-extrabold active:scale-[0.95] dark:font-medium"
        >
          <Moon className="size-4" />
          <span className="text-sm">Dark Mode</span>
        </button>
      ) : (
        <button
          onClick={handleLight}
          className="flex items-center gap-1 font-bold transition-all duration-100 hover:font-extrabold active:scale-[0.95]"
        >
          <Sun className="size-4" />
          <span className="text-sm">Light Mode</span>
        </button>
      )}
    </nav>
  );
}
