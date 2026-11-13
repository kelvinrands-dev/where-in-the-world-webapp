import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { CountryPage } from "./pages/CountryPage/CountryPage";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import "./App.css";
import { useHandleScroll } from "./hooks/useHandleScroll";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [currentHomeGrid, setCurrentHomeGrid] = useState([]);
  const [appIsLoading, setAppIsLoading] = useState(true);

  //unfocuses all elements on scroll
  useHandleScroll();

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const res = await axios.get("/data.json");
        setAllCountries(res.data);
        setCurrentHomeGrid(res.data);
        setAppIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    fetchAllCountries();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            currentHomeGrid={currentHomeGrid}
            allCountries={allCountries}
            setCurrentHomeGrid={setCurrentHomeGrid}
            appIsLoading={appIsLoading}
          />
        }
      />
      <Route
        path="/country/:countryName"
        element={<CountryPage allCountries={allCountries} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
