import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryWeather from './CountryWeather';

// data = object
const Country = ({ data }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const api_key = import.meta.env.VITE_SOME_KEY;
    //210e18024d6bf3315eff1699c88fedde
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.capital}&appid=${api_key}`
      )
      .then((res) => setWeather(res.data));
  }, [data.capital]);

  return (
    <div className="">
      <h1 className="text-5xl font-extrabold pt-4 pb-2">{data.name.common}</h1>
      <p>
        {data.subregion}, {data.region}
      </p>
      <p>
        {data.cca2}, {data.cca3}, {data.cioc}
      </p>
      <h2 className="text-xl font-semibold py-4">
        Official Name : {data.name.official}
      </h2>
      <img
        src={data.flags.png}
        alt={data.flags.alt}
        className="mx-auto border border-slate-800 mb-2"
      />
      <div className="flex flex-col gap-3 font-semibold">
        <p>Capital : {data.capital}</p>
        <p>Area : {data.area}</p>
        <ul>
          <h3>Languages</h3>
          {Object.keys(data.languages).map((key) => {
            return <li key={key}>{data.languages[key]}</li>;
          })}
        </ul>
        <CountryWeather countryWeather={weather}></CountryWeather>
      </div>
    </div>
  );
};
export default Country;
