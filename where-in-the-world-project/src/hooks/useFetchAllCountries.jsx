import { useEffect } from "react";
import axios from "axios";

export function useFetchAllCountries({
  setAllCountries,
  setCurrentHomeGrid,
  setAppIsLoading,
}) {
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
  }, [setAllCountries, setCurrentHomeGrid, setAppIsLoading]);
}
