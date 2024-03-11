const CountryCard = ({ country }) => {
  console.log(country);
  const { name, flags } = country;

  return (
    <>
      <div className="flex flex-col items-center justify-center p-10 m-5 border-2 border-red-500">
        <h1 className="mb-5 text-xl text-center">Name: {name?.common}</h1>
        <img src={flags.png} alt="img" />
      </div>
    </>
  );
};

export default CountryCard;
