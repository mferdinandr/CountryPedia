const CountryWeather = ({ countryWeather }) => {
  const style = {
    backgroundColor: 'black',
  };

  return (
    <>
      {countryWeather.main && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">
            Weather in <span>{countryWeather.name}</span>
          </h2>
          <p>
            <span>
              {(countryWeather.main.feels_like - 273.15).toFixed(2)} Celcius
            </span>
          </p>
          <img className="mx-auto my-3 w-1/4"
            src={`https://openweathermap.org/img/wn/${countryWeather.weather.map(
              (icon) => icon.icon
            )}@2x.png`}
            style={style}
          />
          <p>Wind : <span>{countryWeather.wind.speed}m/s</span></p>
        </div>
      )}
    </>
  );
};

export default CountryWeather;
