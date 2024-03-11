import Countries from "./components/Countries";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-16 font-mono text-3xl font-semibold underline uppercase">
        Countries
      </h1>
      <Countries />
    </div>
  );
};

export default App;
