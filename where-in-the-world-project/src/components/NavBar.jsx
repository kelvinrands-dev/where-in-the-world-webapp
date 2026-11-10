import { Moon } from "lucide-react";

export function NavBar() {
  return (
    <nav class="flex items-center justify-between bg-white px-4 py-6 shadow-md">
      <button class="font-extrabold">Where in the world?</button>
      <button class="flex gap-2 font-medium">
        <Moon class="w-5" />
        <span>Dark Mode</span>
      </button>
    </nav>
  );
}
