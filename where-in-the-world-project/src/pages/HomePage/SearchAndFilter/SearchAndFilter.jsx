import { useState, useRef } from "react";
import { Search, SearchX } from "lucide-react";
import { Filter } from "./Filter";

export function SearchAndFilter({
  allCountries,
  setCurrentHomeGrid,
  currentHomeGrid,
  appIsLoading,
  searchedCountry,
  setSearchedCountry,
}) {
  const [showRegionDrop, setShowRegionDrop] = useState(false);
  const [currentRegion, setCurrentRegion] = useState("");

  const inputRef = useRef(null);

  const handleSearch = (e) => {
    setShowRegionDrop(false);
    const val = e.target.value;
    setSearchedCountry(val);
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.name.toLowerCase().includes(val.toLowerCase());
      }),
    );
    setCurrentRegion("");
  };

  return (
    <section className="flex flex-col gap-4 md:flex-row md:justify-between">
      {/*SEARCH BAR */}
      <div className="shadow-main group dark:dark-element flex w-full gap-4 rounded-md bg-white p-3 md:w-[50%] dark:text-white">
        <Search className="transiton-all text-neutral-400 duration-300 group-focus-within:text-black dark:text-white dark:group-focus-within:text-white/70" />
        <input
          className="w-full font-medium placeholder:text-neutral-400 dark:placeholder:text-white/80"
          placeholder="Search for a country..."
          value={searchedCountry}
          onChange={(e) => {
            handleSearch(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              inputRef.current.blur();
              setSearchedCountry("");
            }
          }}
          ref={inputRef}
        ></input>
      </div>

      {/**FILTER BY REGION */}
      <Filter
        allCountries={allCountries}
        setCurrentHomeGrid={setCurrentHomeGrid}
        showRegionDrop={showRegionDrop}
        setShowRegionDrop={setShowRegionDrop}
        currentRegion={currentRegion}
        setCurrentRegion={setCurrentRegion}
        setSearchedCountry={setSearchedCountry}
      />

      {/**NOT FOUND */}
      {currentHomeGrid.length === 0 && !appIsLoading && (
        <div className="my-10 flex flex-col items-center justify-center text-xl font-extrabold">
          <SearchX className="size-10" />
          <p>Not Found</p>
        </div>
      )}
    </section>
  );
}
