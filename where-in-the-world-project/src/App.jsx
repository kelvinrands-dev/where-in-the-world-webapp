import { Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";
import { CountryPage } from "./pages/CountryPage/CountryPage";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/country/:countryName" element={<CountryPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
