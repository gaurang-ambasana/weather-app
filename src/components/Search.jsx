import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, GEO_API_OPTIONS } from "../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const searchHandler = (text) => {
    setSearch(text);
    onSearchChange(text);
  };

  const loadOptions = (inputValue) =>
    fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, GEO_API_OPTIONS)
      .then((response) => response.json())
      .then((response) => ({
        options: response.data.map(
          ({ name, latitude, longitude, countryCode }) => ({
            value: `${latitude} ${longitude}`,
            label: `${name}, ${countryCode}`,
          })
        ),
      }))
      .catch((err) => console.error(err));

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={900}
      value={search}
      onChange={searchHandler}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
