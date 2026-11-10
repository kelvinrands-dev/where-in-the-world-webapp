import { NavBar } from "../../components/NavBar";
import { SearchAndFilter } from "./SearchAndFilter";

export function HomePage() {
  return (
    <div class="page-theme flex h-screen flex-col gap-8">
      <NavBar />
      <main class="flex flex-col px-4">
        <SearchAndFilter />
      </main>
    </div>
  );
}
