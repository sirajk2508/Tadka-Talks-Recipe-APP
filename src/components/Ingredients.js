import React from "react";

const Ingredients = ({ingredients}) => {
  return (
    <div className="mx-8 Ingredients-container col-span-1">
      <h1 className="text-2xl font-bold lg:mx-20 text-center lg:text-start">Ingredients</h1>
      <p className="w-full m-2 border border-gray-600"></p>
      <ul className="lg:mx-8 lg:my-4 md:mx-0 md:pl-0 pl-20 h-64 w-full overflow-y-scroll shadow-sm">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center mb-2">
            {ingredient.image && (
              <img
                src={ingredient?.image}
                alt={ingredient?.name}
                className="w-10 mr-10"
              />
            )}
            <li className="ml-2 font-medium">{ingredient?.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
