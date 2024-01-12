const SearchBar = ({ handleSearch }) => {
  return (
    <div >
      <label htmlFor="input" className="text-3xl font-bold mt-2">
        Find Countries
      </label>
      <input
        type="text"
        onChange={handleSearch}
        className="border rounded-md border-slate-400 w-3/4 m-4 px-3 py-2 text-md focus:rounded-xl focus:bg-lime-100 "
      />
    </div>
  );
};

export default SearchBar;
