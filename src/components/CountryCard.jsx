import { useState } from "react";

const CountryCard = ({ country }) => {
  const [visited, setVisited] = useState(false);

  const { name, flags, population, area, cca3 } = country;

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 m-5 border-2 border-red-500 ">
        <h1 className="text-xl text-center ">Name: {name?.common}</h1>
        <img
          src={flags?.png}
          alt="img"
          className="object-cover max-w-full my-10 max-h-80"
        />

        <div className="flex items-center justify-between gap-3 ">
          <p className="font-mono font-semibold">Population: {population}</p>
          <p className="font-mono font-semibold">Area: {area}</p>
          <p className="font-mono font-semibold">Code: {cca3}</p>
        </div>

        <button onClick={handleVisited} className="mt-8 btn">
          Visited
        </button>

        {visited ? "I have visited this country" : ""}
      </div>
    </>
  );
};

export default CountryCard;
