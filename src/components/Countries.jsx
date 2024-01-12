const Countries = ({ data, handleShow }) => {
  if (data.length > 10) {
    return (
      <li className="text-center list-none font-semibold text-xl">To many mactches, specify another filter</li>
    );
  } else if (data.length == 1) {
    return null;
  } else {
    return data.map((country) => (
      <div key={country.name.cca2} className="pb-4">
        <li className="list-none font-semibold text-xl">{country.name.common}</li>
        <button onClick={() => handleShow(country)} className="border rounded-sm border-slate-600 bg-yellow-50 px-4 py-1/2 mt-1 hover:bg-lime-200 hover:rounded-xl">show</button>
      </div>
    ));
  }
};

export default Countries;
