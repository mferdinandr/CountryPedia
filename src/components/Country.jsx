import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryWeather from './CountryWeather';

// data = object
const Country = ({ data }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    // const api_key = import.meta.env.VITE_SOME_KEY;
    const api_key = import.meta.env.VITE_APP_API;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.capital}&appid=${api_key}`
      )
      .then((res) => setWeather(res.data));
  }, [data.capital]);

  return (
    <>
      <h1 className="text-5xl font-extrabold pt-4 pb-2s">
        <a href={data.maps.googleMaps} target="blank">
          {' '}
          {data.name.common}
        </a>
      </h1>
      <p>
        {data.subregion}, {data.region}
      </p>
      <p>
        {data.cca2}, {data.cca3}, {data.cioc}
      </p>
      <h2 className="text-lg font-semibold py-4">
        Official Name : {data.name.official}
      </h2>
      <img
        src={data.flags.png}
        alt={data.flags.alt}
        className="mx-auto border border-slate-800 mb-2"
      />
      <div className="flex flex-col gap-4 font-bold">
        <p>
          Capital : <span>{data.capital}</span>
        </p>
        <p>
          Area : <span>{data.area}</span>
        </p>
        <ul>
          <h3>Languages</h3>
          {Object.keys(data.languages).map((key) => {
            return (
              <li key={key}>
                <span>{data.languages[key]}</span>
              </li>
            );
          })}
        </ul>
        <ul>
          <h3>Timezones</h3>
          {data.timezones.map((time) => {
            return (
              <li key={time}>
                <span>{time}</span>
              </li>
            );
          })}
        </ul>
        <CountryWeather countryWeather={weather}></CountryWeather>
      </div>
    </>
  );
};
export default Country;
