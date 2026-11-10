import { Search, ChevronDown } from "lucide-react";

export function SearchAndFilter() {
  return (
    <section class="flex flex-col gap-4">
      {/*SEARCH BAR */}
      <div class="shadow-main flex w-full gap-4 rounded-md bg-white p-3">
        <Search class="text-neutral-400" />
        <input
          class="w-full font-medium placeholder:text-neutral-400"
          placeholder="Search for a country..."
        ></input>
      </div>

      {/**FILTER BY REGION */}
      <div class="text-sm">
        <button class="shadow-main relative flex w-45 items-center justify-between rounded-md bg-white p-3">
          <p>Filter by Region</p>
          <ChevronDown class="w-4" />
        </button>
        {/**DROPDOWN - change hidden to flex */}
        <div class="shadow-main absolute z-10 hidden w-45 translate-y-2 flex-col gap-2 rounded-md p-3">
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
