import React, { useState, useEffect } from "react";
import { IMAGE_URL, SPOONACULAR_RECIPE_QUERY } from "../libs/constants";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";

const RecipeList = ({query}) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, [query]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(SPOONACULAR_RECIPE_QUERY+query);
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response?.json();
      setRecipes(data?.results);
      setLoading(false);
      localStorage.setItem("cachedRecipes", JSON.stringify(data.results));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-wrap mx-10 my-10 mt-2 justify-center items-center cursor-pointer">
      {loading ? (
        <Shimmer />
      ) : (
        recipes.map((recipe) => (
          <Link to={"/recipedetail/" + recipe?.id} key={recipe?.id}>
            <div className="w-[22rem] md:w-[20rem] lg:w-[22rem] m-4 md:0 lg:m-4 shadow-lg hover:shadow-sm h-72 rounded-lg">
              <img
                className="lg:w-80 w-80 md:w-72 mx-3 my-1 mt-3 h-44 rounded-lg"
                src={IMAGE_URL + recipe?.image}
                alt={recipe?.title}
              />
              <h2 className="text-center text-wrap font-semibold mt-2">{recipe?.title}</h2>
              <button className="bg-orange-100 rounded-full border mx-28 border-orange-800 text-red-700 px-4 py-2 m-4">Get recipe</button>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;
