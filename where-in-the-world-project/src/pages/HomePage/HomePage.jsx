import { NavBar } from "../../components/NavBar";
import { CountryGrid } from "./CountryGrid";
import { SearchAndFilter } from "./SearchAndFilter/SearchAndFilter";

export function HomePage({
  currentHomeGrid,
  allCountries,
  setCurrentHomeGrid,
  appIsLoading,
}) {
  return (
    <div className="flex flex-col gap-8">
      <NavBar />
      <main className="flex flex-col gap-8 px-4 pb-8">
        <SearchAndFilter
          allCountries={allCountries}
          setCurrentHomeGrid={setCurrentHomeGrid}
          currentHomeGrid={currentHomeGrid}
          appIsLoading={appIsLoading}
        />
        <CountryGrid currentHomeGrid={currentHomeGrid} />

        {/**LOADING ELEMENT */}
        {appIsLoading && (
          <div className="flex justify-center text-xl font-extrabold">
            Loading...
          </div>
        )}
      </main>
    </div>
  );
}
