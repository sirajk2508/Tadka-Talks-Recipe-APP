import { useEffect, useState } from "react";
import { RECIPE_DETAIL_URL1, RECIPE_DETAIL_URL2 } from "../libs/constants";
import Header from "./Header";

import { useParams } from "react-router-dom";
import {Shimmer} from "./Shimmer"

import BasicRecipeDetails from "./BasicRecipeDetails";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          RECIPE_DETAIL_URL1 + id + RECIPE_DETAIL_URL2
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recipe details");
        }
        const data = await response.json();
        setRecipe(data);
        localStorage.setItem("cachedRecipe", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchRecipe();
    }

  }, [id]);
  if (!recipe) return <Shimmer/>;

  const ingredients = recipe?.analyzedInstructions?.flatMap((instruction) =>
    instruction.steps.flatMap((step) =>
      step.ingredients.map((ingredient) => ingredient)
    )
  );

  const steps = recipe?.analyzedInstructions[0]?.steps;

  return (
    <>
      <Header />
      {recipe &&<BasicRecipeDetails recipe={recipe}/>}
      <div className="md:grid md:grid-cols-3 lg:gap-8">
        <Ingredients ingredients={ingredients}/>
        <Instructions steps={steps}/>
      </div>
    </>
  );
};

export default RecipeDetails;
