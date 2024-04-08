import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("chicken");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Call onSearch function with current query
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-lg justify-center m-4 mx-10">
      <CiSearch fontSize={36} className="bg-gray-100 p-1 px-2 rounded-l-full" />
      <input
        className="bg-gray-100 outline-none p-1 pr-10 rounded-r-full w-[70%]"
        type="text"
        placeholder="Search for a dish..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="mx-2 border border-gray-700 px-4 py-1 rounded-full bg-gray-100 hover:bg-gray-200 hover:font-medium">Search</button>
    </form>
  );
};

export default SearchForm;
