import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { CountryPage } from "./pages/CountryPage/CountryPage";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import "./App.css";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [currentHomeGrid, setCurrentHomeGrid] = useState([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      try {
        const res = await axios.get("/data.json");
        setAllCountries(res.data);
        setCurrentHomeGrid(res.data);
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
          />
        }
      />
      <Route path="/country/:countryName" element={<CountryPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
