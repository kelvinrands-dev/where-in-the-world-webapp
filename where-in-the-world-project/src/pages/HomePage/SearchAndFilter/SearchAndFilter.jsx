import { useState } from "react";
import { Search } from "lucide-react";
import { Filter } from "./Filter";

export function SearchAndFilter({ allCountries, setCurrentHomeGrid }) {
  const [searchedCountry, setSearchedCountry] = useState("");

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
            const val = e.target.value;
            setSearchedCountry(val);

            setCurrentHomeGrid(
              allCountries.filter((country) => {
                return country.name.toLowerCase().includes(val.toLowerCase());
              }),
            );
          }}
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
