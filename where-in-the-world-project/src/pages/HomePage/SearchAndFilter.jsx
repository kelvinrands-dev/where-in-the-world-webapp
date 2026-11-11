import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

export function SearchAndFilter() {
  const [showRegionDrop, setShowRegionDrop] = useState(false);

  const handleDrop = () => {
    setShowRegionDrop((prev) => !prev);
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
          className={`${showRegionDrop && "pointer-events-auto visible translate-y-2 opacity-100"} shadow-main pointer-events-none invisible absolute z-10 flex w-45 translate-y-0 flex-col gap-2 rounded-md bg-white p-3 opacity-0 transition-all duration-300`}
        >
          <p>Africa</p>
          <p>America</p>
          <p>Asia</p>
          <p>Europe</p>
          <p>Oceania</p>
        </div>
      </div>
    </section>
  );
}
