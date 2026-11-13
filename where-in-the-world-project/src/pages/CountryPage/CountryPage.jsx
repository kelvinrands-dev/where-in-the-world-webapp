import { useParams, useNavigate } from "react-router";
import { NavBar } from "../../components/NavBar";
import { ArrowLeft } from "lucide-react";

export function CountryPage({ allCountries }) {
  const { countryName } = useParams();
  const navigate = useNavigate();

  if (!allCountries) return null;

  const currentCountry = allCountries.filter((country) => {
    return country.name === countryName;
  });

  const country = currentCountry[0];

  const countryLanguages = country.languages.map((lang) => {
    return `${lang.name}`;
  });

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col gap-8">
      <NavBar />
      <main className="flex flex-col gap-8 px-4">
        <button
          onClick={handleBack}
          className="shadow-main items center flex w-25 justify-between bg-white px-4 py-1"
        >
          <ArrowLeft />
          <span>Back</span>
        </button>

        <section>
          <img className="w-full" src={country.flags.svg} />

          <div>
            <p>{country.name}</p>

            <div>
              <div>
                <p>
                  <span className="font-bold">Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span className="font-bold">Population: </span>
                  {new Intl.NumberFormat("en-us").format(country.population)}
                </p>
                <p>
                  <span className="font-bold">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-bold">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="font-bold">Capital: </span>
                  {country.capital}
                </p>
              </div>

              <div>
                <p>
                  <span className="font-bold">Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p>
                  <span className="font-bold">Currencies: </span>
                  {country.currencies[0].name}
                </p>
                <p>
                  <span className="font-bold">Languages: </span>
                  <span>{countryLanguages.join(", ")}</span>
                </p>
              </div>
            </div>

            <div>
              <p>Border Countries</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
