import { NavBar } from "../../components/NavBar";
import { SearchAndFilter } from "./SearchAndFilter";

export function HomePage({ allCountries }) {
  return (
    <div className="page-theme flex h-screen flex-col gap-8">
      <NavBar />
      <main className="flex flex-col px-4">
        <SearchAndFilter />
      </main>
    </div>
  );
}
