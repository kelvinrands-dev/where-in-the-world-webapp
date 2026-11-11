import { Search, ChevronDown } from "lucide-react";

export function SearchAndFilter() {
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
        <button className="shadow-main relative flex w-45 items-center justify-between rounded-md bg-white p-3">
          <p>Filter by Region</p>
          <ChevronDown className="w-4" />
        </button>
        {/**DROPDOWN - change hidden to flex */}
        <div className="shadow-main absolute z-10 hidden w-45 translate-y-2 flex-col gap-2 rounded-md p-3">
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
