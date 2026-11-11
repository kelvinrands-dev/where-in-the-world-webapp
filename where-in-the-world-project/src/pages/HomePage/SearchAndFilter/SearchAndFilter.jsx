import { Search } from "lucide-react";
import { Filter } from "./Filter";

export function SearchAndFilter({ allCountries, setCurrentHomeGrid }) {
  return (
    <section className="flex flex-col gap-4">
      {/*SEARCH BAR */}
      <div className="shadow-main flex w-full gap-4 rounded-md bg-white p-3">
        <Search className="text-neutral-400" />
        <input
          className="w-full font-medium placeholder:text-neutral-400"
          placeholder="Search for a country..."
        ></input>
      </div>

      {/**FILTER BY REGION */}
      <Filter
        allCountries={allCountries}
        setCurrentHomeGrid={setCurrentHomeGrid}
      />
    </section>
  );
}
