import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
import Countries from './components/Countries';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [showData, setShowData] = useState();

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  useEffect(() => {
    axios.get(`${baseUrl}all`).then((response) => setCountries(response.data));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const countriesToDisplay = searchCountry
    ? countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
      })
    : [];

  useEffect(() => {
    countriesToDisplay.length == 1 && setShowData(countriesToDisplay[0]);
  }, [countriesToDisplay]);

  const handleShow = (data) => {
    //setdata not array
    setShowData(data);
  };

  return (
    <>
      <div className="text-center mt-10 border-4 rounded-md border-slate-400 w-1/2 mx-auto h-auto py-5">
        <SearchBar handleSearch={handleSearch} />
        <div className="border-4 border-y-slate-400	border-x-transparent py-4 mt-3">
          <Countries
            data={countriesToDisplay}
            handleShow={handleShow}
          ></Countries>
        </div>
        {showData && <Country data={showData} />}
      </div>
    </>
  );
}

export default App;
