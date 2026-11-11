import { Moon } from "lucide-react";

export function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-white px-4 py-6 shadow-md">
      <button className="font-extrabold">Where in the world?</button>
      <button className="flex gap-2 font-medium">
        <Moon className="w-5" />
        <span>Dark Mode</span>
      </button>
    </nav>
  );
}
