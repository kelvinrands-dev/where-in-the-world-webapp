import { NavBar } from "../../components/NavBar";
import { CountryGrid } from "./CountryGrid";
import { SearchAndFilter } from "./SearchAndFilter";

export function HomePage({ currentHomeGrid }) {
  return (
    <div className="page-theme flex flex-col gap-8">
      <NavBar />
      <main className="flex flex-col gap-8 px-4 pb-8">
        <SearchAndFilter />
        <CountryGrid currentHomeGrid={currentHomeGrid} />
      </main>
    </div>
  );
}
