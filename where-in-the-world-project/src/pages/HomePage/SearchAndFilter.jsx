import { Search } from "lucide-react";

export function SearchAndFilter() {
  return (
    <section class="flex flex-col">
      {/*SEARCH BAR */}
      <div class="shadow-main flex w-full gap-4 rounded-md bg-white p-3">
        <Search class="text-neutral-400" />
        <input
          class="w-full font-medium placeholder:text-neutral-400"
          placeholder="Search for a country..."
        ></input>
      </div>
    </section>
  );
}
