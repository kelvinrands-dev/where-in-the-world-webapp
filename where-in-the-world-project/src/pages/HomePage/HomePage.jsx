import { NavBar } from "../../components/NavBar";
import { CountryGrid } from "./CountryGrid";
import { SearchAndFilter } from "./SearchAndFilter/SearchAndFilter";

export function HomePage({
  currentHomeGrid,
  allCountries,
  setCurrentHomeGrid,
}) {
  return (
    <div className="page-theme flex flex-col gap-8">
      <NavBar />
      <main className="flex flex-col gap-8 px-4 pb-8">
        <SearchAndFilter
          allCountries={allCountries}
          setCurrentHomeGrid={setCurrentHomeGrid}
          currentHomeGrid={currentHomeGrid}
        />
        <CountryGrid currentHomeGrid={currentHomeGrid} />
      </main>
    </div>
  );
}
