import { Moon } from "lucide-react";

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-6 shadow-md">
      <button className="font-extrabold">Where in the world?</button>
      <button className="flex items-center gap-1 font-bold">
        <Moon className="size-4" />
        <span className="text-sm">Dark Mode</span>
      </button>
    </nav>
  );
}
