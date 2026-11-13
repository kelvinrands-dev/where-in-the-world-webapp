import { useParams } from "react-router";
import { NavBar } from "../../components/NavBar";
import { ArrowLeft } from "lucide-react";

export function CountryPage({ allCountries }) {
  const { countryName } = useParams();

  const currentCountry = allCountries.filter((country) => {
    return country.name === countryName;
  });

  console.log(currentCountry);

  return (
    <div>
      <NavBar />
      <section>
        <button>
          <ArrowLeft />
          <span>Back</span>
        </button>
      </section>
    </div>
  );
}
