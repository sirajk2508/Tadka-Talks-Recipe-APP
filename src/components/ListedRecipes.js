import React, { useState } from "react";
import Header from "./Header";
import RecipeList from "./RecipeList";
import SearchForm from "./SearchForm";

const ListedRecipes = () => {
  const [searchQuery, setSearchQuery] = useState("chicken");

  const handleSearch = (query) => {
    setSearchQuery(query); // Update searchQuery state with the new query
  };

  return (
    <>
    <Header/>
    <div>
      <SearchForm onSearch={handleSearch}/>
      <RecipeList query={searchQuery}/>
    </div>
    </>
  );
};

export default ListedRecipes;

