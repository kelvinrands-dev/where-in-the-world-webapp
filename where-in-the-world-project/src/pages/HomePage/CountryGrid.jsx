import { CountryCard } from "./CountryCard";

export function CountryGrid({ currentHomeGrid }) {
  if (!currentHomeGrid) return null;
  return (
    <section className="grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-3 md:gap-6">
      {currentHomeGrid.map((country, index) => {
        return <CountryCard key={index} country={country} />;
      })}
    </section>
  );
}
