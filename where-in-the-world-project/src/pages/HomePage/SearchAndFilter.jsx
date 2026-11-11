import { useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";

export function SearchAndFilter({ allCountries, setCurrentHomeGrid }) {
  const [showRegionDrop, setShowRegionDrop] = useState(false);
  const [currentRegion, setCurrentRegion] = useState("");

  const handleDrop = () => {
    setShowRegionDrop((prev) => !prev);
  };

  const filterAfrica = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Africa";
      }),
    );
    setCurrentRegion("Africa");
    setShowRegionDrop(false);
  };

  const filterAmerica = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Americas";
      }),
    );
    setCurrentRegion("America");
    setShowRegionDrop(false);
  };

  const filterAsia = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Asia";
      }),
    );
    setCurrentRegion("Asia");
    setShowRegionDrop(false);
  };

  const filterEurope = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Europe";
      }),
    );
    setCurrentRegion("Europe");
    setShowRegionDrop(false);
  };

  const filterOceania = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Oceania";
      }),
    );
    setCurrentRegion("Oceania");
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
          <button
            className="flex w-full justify-between py-1 text-left"
            onClick={filterAfrica}
          >
            <span>Africa</span>
            {currentRegion === "Africa" && <Check className="w-3" />}
          </button>
          <button
            className="flex w-full justify-between py-1 text-left"
            onClick={filterAmerica}
          >
            <span>America</span>
            {currentRegion === "America" && <Check className="w-3" />}
          </button>
          <button
            className="flex w-full justify-between py-1 text-left"
            onClick={filterAsia}
          >
            <span>Asia</span>
            {currentRegion === "Asia" && <Check className="w-3" />}
          </button>
          <button
            className="flex w-full justify-between py-1 text-left"
            onClick={filterEurope}
          >
            <span>Europe</span>
            {currentRegion === "Europe" && <Check className="w-3" />}
          </button>
          <button
            className="flex w-full justify-between py-1 text-left"
            onClick={filterOceania}
          >
            <span>Oceania</span>
            {currentRegion === "Oceania" && <Check className="w-3" />}
          </button>
        </div>
      </div>
    </section>
  );
}
