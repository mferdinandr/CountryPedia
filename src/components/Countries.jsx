const Countries = ({ data, handleShow }) => {
  if (data.length > 10) {
    return (
      <li className="text-center">To many mactches, specify another filter</li>
    );
  } else if (data.length == 1) {
    return null;
  } else {
    return data.map((country) => (
      <div key={country.name.cca2}>
        <li>{country.name.common}</li>
        <button onClick={() => handleShow(country)}>show</button>
      </div>
    ));
  }
};

export default Countries;
