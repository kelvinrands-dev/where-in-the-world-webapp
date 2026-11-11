import { CountryCard } from "./CountryCard";

export function CountryGrid({ allCountries }) {
  return (
    <section className="grid w-full grid-cols-1 place-items-center gap-8">
      {allCountries.map((country) => {
        return <CountryCard country={country} />;
      })}
    </section>
  );
}
