import { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setCountries(data);
    };

    getCountries();
  }, []);

  return (
    <div className="my-10">
      {countries.map((country, idx) => {
        return <CountryCard key={idx} country={country} />;
      })}
    </div>
  );
};

export default Countries;
