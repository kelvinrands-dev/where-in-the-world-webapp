import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router";
import { NavBar } from "../../components/NavBar";
import { ArrowLeft } from "lucide-react";

export function CountryPage() {
  const [allCountries, setAllCountries] = useState();

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const res = await axios.get("/data.json");
        setAllCountries(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchAllCountries();
  }, []);

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

  const borderingCountries = country.borders.map((border) => {
    return allCountries.filter((country) => {
      return country.alpha3Code === border;
    });
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

        <section className="flex flex-col gap-4">
          <img className="h-65 w-full object-cover" src={country.flags.svg} />

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-extrabold">{country.name}</p>

            <div className="flex flex-col gap-8">
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
                  {country.currencies[0].name}
                </p>
                <p>
                  <span className="font-bold">Languages: </span>
                  <span>{countryLanguages.join(", ")}</span>
                </p>
              </div>
            </div>

            <div className="mt-4 mb-8 flex flex-col gap-2">
              <p className="text-lg font-extrabold">Border Countries:</p>
              <div className="grid grid-cols-3 gap-2">
                {borderingCountries.map((border, index) => {
                  return (
                    <Link
                      className="shadow-main flex w-full items-center justify-center rounded-sm bg-white px-4 py-2 text-center text-sm"
                      key={index}
                    >
                      {border[0].name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
