import Search from "./components/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
};

export default App;
