import { CountryCard } from "./CountryCard";

export function CountryGrid({ allCountries }) {
  const mock = allCountries[0];

  return <CountryCard country={mock} />;
}

/*<>
      {allCountries.map((country) => {
        const cFlag = country.flags.svg;
        const cName = country.name;
        const cPopulation = country.population;
        const cRegion = country.region;
        const cCapital = country.capital;
        return <CountryCard />;
      })}
      )
    </>*/
