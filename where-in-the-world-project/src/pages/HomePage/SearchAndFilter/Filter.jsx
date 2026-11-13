import { ChevronDown, Check } from "lucide-react";

export function Filter({
  allCountries,
  setCurrentHomeGrid,
  showRegionDrop,
  setShowRegionDrop,
  currentRegion,
  setCurrentRegion,
  setSearchedCountry,
}) {
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
    setSearchedCountry("");
  };

  const filterAmerica = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Americas";
      }),
    );
    setCurrentRegion("America");
    setShowRegionDrop(false);
    setSearchedCountry("");
  };

  const filterAsia = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Asia";
      }),
    );
    setCurrentRegion("Asia");
    setShowRegionDrop(false);
    setSearchedCountry("");
  };

  const filterEurope = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Europe";
      }),
    );
    setCurrentRegion("Europe");
    setShowRegionDrop(false);
    setSearchedCountry("");
  };

  const filterOceania = () => {
    setCurrentHomeGrid(
      allCountries.filter((country) => {
        return country.region === "Oceania";
      }),
    );
    setCurrentRegion("Oceania");
    setShowRegionDrop(false);
    setSearchedCountry("");
  };

  return (
    <div className="text-sm">
      {/**FILTER BY REGION BUTTON */}
      <button
        onClick={handleDrop}
        className="shadow-main dark:dark-element relative flex w-45 items-center justify-between rounded-md bg-white p-3"
      >
        <p>Filter by Region</p>
        <ChevronDown
          className={`w-4 transition-transform duration-200 ${showRegionDrop && "rotate-180"}`}
        />
      </button>

      {/**DROPDOWN */}
      <div
        className={`${showRegionDrop ? "pointer-events-auto visible translate-y-2 opacity-100" : "pointer-events-none invisible translate-y-0 opacity-0"} shadow-main dark:dark-element absolute z-10 flex w-45 flex-col items-start rounded-md bg-white p-3 transition-all duration-300`}
      >
        <button
          className="flex w-full items-center justify-between py-1 text-left"
          onClick={filterAfrica}
        >
          <span>Africa</span>
          {currentRegion === "Africa" && <Check className="w-3" />}
        </button>
        <button
          className="flex w-full items-center justify-between py-1 text-left"
          onClick={filterAmerica}
        >
          <span>America</span>
          {currentRegion === "America" && <Check className="w-3" />}
        </button>
        <button
          className="flex w-full items-center justify-between py-1 text-left"
          onClick={filterAsia}
        >
          <span>Asia</span>
          {currentRegion === "Asia" && <Check className="w-3" />}
        </button>
        <button
          className="flex w-full items-center justify-between py-1 text-left"
          onClick={filterEurope}
        >
          <span>Europe</span>
          {currentRegion === "Europe" && <Check className="w-3" />}
        </button>
        <button
          className="flex w-full items-center justify-between py-1 text-left"
          onClick={filterOceania}
        >
          <span>Oceania</span>
          {currentRegion === "Oceania" && <Check className="w-3" />}
        </button>
      </div>
    </div>
  );
}
