import { Link } from "react-router";

export function CountryCard({ country }) {
  if (!country) return null;

  const cFlag = country.flags.svg;
  const cName = country.name;
  const cPopulation = country.population;
  const cRegion = country.region;
  const cCapital = country.capital;

  return (
    <Link
      to={`/country/${cName}`}
      className="shadow-main dark:dark-element h-90 w-[80%] overflow-hidden rounded-lg bg-white transition-transform duration-200 hover:-translate-y-2 focus-visible:-translate-y-4 active:scale-[0.95] md:w-full"
    >
      <img className="h-[50%] w-full object-cover shadow-sm" src={cFlag} />
      <div className="flex flex-col justify-center gap-4 px-6 py-4 md:px-4">
        <p className="truncate text-xl font-extrabold">{cName}</p>

        <div className="flex flex-col gap-2">
          <p>
            <span className="font-bold">Population: </span>
            <span>{new Intl.NumberFormat("en-us").format(cPopulation)}</span>
          </p>
          <p>
            <span className="font-bold">Region: </span>
            <span>{cRegion}</span>
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            <span>{cCapital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
