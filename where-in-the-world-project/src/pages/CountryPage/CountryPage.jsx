import { useParams, useNavigate, Link } from "react-router";
import { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { ArrowLeft } from "lucide-react";

export function CountryPage({ allCountries }) {
  const { countryName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countryName]);

  if (allCountries.length === 0) return null;

  const currentCountry = allCountries.filter((country) => {
    return country.name === countryName;
  });

  const country = currentCountry[0];

  const countryLanguages = country.languages.map((lang) => {
    return `${lang.name}`;
  });

  let borderingCountries = [];

  if (country.borders) {
    borderingCountries = country.borders.map((border) => {
      return allCountries.filter((country) => {
        return country.alpha3Code === border;
      });
    });
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="mb-8 flex h-screen flex-col gap-8">
      <NavBar />
      <main className="flex flex-col gap-8 px-5 md:px-8 lg:px-10 xl:px-12">
        {/**BACK BUTTON */}
        <button
          onClick={handleBack}
          className="shadow-main dark:dark-element items center flex w-25 justify-between bg-white px-4 py-1 transition-transform duration-200 hover:-translate-y-1 active:scale-[0.95]"
        >
          <ArrowLeft />
          <span>Back</span>
        </button>

        {/**MAIN PAGE */}
        <section className="flex flex-col gap-4 xl:flex-row xl:gap-18">
          {/**COUNTRY FLAG */}
          <img
            className="shadow-main w-full xl:h-100 xl:w-[45%] xl:object-cover"
            src={country.flags.svg}
          />

          {/**COUNTRY DETAILS */}
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-extrabold">{country.name}</p>

            <div className="flex flex-col gap-8 md:flex-row md:gap-32 lg:gap-40 xl:gap-20">
              <div className="flex flex-col gap-2">
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

              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-bold">Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p>
                  <span className="font-bold">Currencies: </span>
                  {country.currencies && country.currencies[0].name}
                </p>
                <p>
                  <span className="font-bold">Languages: </span>
                  <span>{countryLanguages.join(", ")}</span>
                </p>
              </div>
            </div>

            {/**BORDERING COUNTRIES */}
            <div className="mt-4 mb-8 flex flex-col gap-2">
              <p className="text-lg font-extrabold">Border Countries:</p>
              <div className="grid grid-cols-3 gap-2">
                {borderingCountries.map((border, index) => {
                  return (
                    <Link
                      className="shadow-main dark:dark-element flex w-full items-center justify-center rounded-sm bg-white px-4 py-2 text-center text-sm transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.95]"
                      key={index}
                      to={`/country/${border[0].name}`}
                    >
                      {border[0].name}
                    </Link>
                  );
                })}
                {borderingCountries.length === 0 && <div>None</div>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
