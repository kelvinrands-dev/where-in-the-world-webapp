import { NavBar } from "../../components/NavBar";
import { CountryGrid } from "./CountryGrid";
import { SearchAndFilter } from "./SearchAndFilter/SearchAndFilter";

export function HomePage({
  currentHomeGrid,
  allCountries,
  setCurrentHomeGrid,
  appIsLoading,
  searchedCountry,
  setSearchedCountry,
}) {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <NavBar />
      <main className="flex flex-col gap-8 px-5 pb-8 md:gap-10 md:px-8 lg:px-10">
        <SearchAndFilter
          allCountries={allCountries}
          setCurrentHomeGrid={setCurrentHomeGrid}
          currentHomeGrid={currentHomeGrid}
          appIsLoading={appIsLoading}
          searchedCountry={searchedCountry}
          setSearchedCountry={setSearchedCountry}
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
