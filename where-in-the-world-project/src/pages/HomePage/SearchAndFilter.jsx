import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export function SearchAndFilter({ allCountries, setCurrentHomeGrid }) {
  const [showRegionDrop, setShowRegionDrop] = useState(false);

  const handleDrop = () => {
    setShowRegionDrop((prev) => !prev);
  };

  const filterAfrica = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Africa";
      }),
    );
    setShowRegionDrop(false);
  };

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
      <div className="text-sm">
        <button
          onClick={handleDrop}
          className="shadow-main relative flex w-45 items-center justify-between rounded-md bg-white p-3"
        >
          <p>Filter by Region</p>
          <ChevronDown
            className={`w-4 transition-transform duration-200 ${showRegionDrop && "rotate-180"}`}
          />
        </button>
        {/**DROPDOWN */}

        <div
          className={`${showRegionDrop ? "pointer-events-auto visible translate-y-2 opacity-100" : "pointer-events-none invisible translate-y-0 opacity-0"} shadow-main absolute z-10 flex w-45 flex-col items-start rounded-md bg-white p-3 transition-all duration-300`}
        >
          <button className="w-full py-1 text-left" onClick={filterAfrica}>
            Africa
          </button>
          <button className="w-full py-1 text-left">America</button>
          <button className="w-full py-1 text-left">Asia</button>
          <button className="w-full py-1 text-left">Europe</button>
          <button className="w-full py-1 text-left">Oceania</button>
        </div>
      </div>
    </section>
  );
}
