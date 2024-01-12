const SearchBar = ({ handleSearch }) => {
  return (
    <div className="text-center mt-10 border border-slate-400 w-1/2 flex fe">
      <label htmlFor="input" className="text-3xl font-bold ">
        Find countries
      </label>
      <br />
      <input
        type="text"
        onChange={handleSearch}
        className="border rounded-md border-slate-400 w-1/4 mt-3 px-3 py-2 text-md focus:rounded-xl focus:bg-lime-100 "
      />
    </div>
  );
};

export default SearchBar;
