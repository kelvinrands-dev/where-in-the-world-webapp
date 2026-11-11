import { NavBar } from "../../components/NavBar";
import { CountryGrid } from "./CountryGrid";
import { SearchAndFilter } from "./SearchAndFilter";

export function HomePage({ allCountries }) {
  return (
    <div className="page-theme flex h-screen flex-col gap-8">
      <NavBar />
      <main className="flex flex-col gap-8 px-4">
        <SearchAndFilter />
        <CountryGrid allCountries={allCountries} />
      </main>
    </div>
  );
}
