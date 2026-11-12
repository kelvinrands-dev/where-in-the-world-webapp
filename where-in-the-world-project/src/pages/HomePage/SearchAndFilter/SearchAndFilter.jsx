import { useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Filter } from "./Filter";

export function SearchAndFilter({
  allCountries,
  setCurrentHomeGrid,
  currentHomeGrid,
}) {
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchedCountry(val);
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.name.toLowerCase().includes(val.toLowerCase());
      }),
    );
  };

  return (
    <section className="flex flex-col gap-4">
      {/*SEARCH BAR */}
      <div className="shadow-main flex w-full gap-4 rounded-md bg-white p-3">
        <Search className="text-neutral-400" />
        <input
          className="w-full font-medium placeholder:text-neutral-400"
          placeholder="Search for a country..."
          value={searchedCountry}
          onChange={(e) => {
            handleSearch(e);
          }}
        ></input>
      </div>

      {/**FILTER BY REGION */}
      <Filter
        allCountries={allCountries}
        setCurrentHomeGrid={setCurrentHomeGrid}
      />

      {/**NOT FOUND */}
    </section>
  );
}
