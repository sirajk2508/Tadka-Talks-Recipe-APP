import { LuLeaf } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import SocialMediaHandles from "./SocialMediaHandles";

const BasicRecipeDetails = ({recipe}) => {
  return (
    <div className="lg:flex mx-7 my-4 font-medium">
      <img
        className="lg:w-[25rem] md:w-full mx-3 my-3 rounded-lg"
        src={recipe?.image}
        alt={recipe.title}
      />
      <div>
        <h2 className="font-primary lg:text-7xl text-3xl text-center lg:text-start text-wrap font-bold lg:mx-10 my-6">
          {recipe?.title}
        </h2>
        <ul className="flex flex-wrap lg:justify-evenly justify-between">
          <li className="mb-2 lg:mb-0 mx-1 lg:mx-0">
            {recipe?.vegetarian ? (
              <span className="bg-green-100 border border-green-900 text-green-700 px-2 py-1 rounded-full">
                Vegetarian
              </span>
            ) : (
              <span className="bg-red-100 border border-red-900 text-red-700 px-2 py-1 rounded-full">
                Non vegetarian
              </span>
            )}
          </li>
          <li className="bg-yellow-100 border border-yellow-900 text-yellow-700 px-2 py-1 rounded-full">Cooking time: {recipe?.readyInMinutes} mins</li>
          <li className="bg-green-100 border border-green-900 text-green-700 px-2 py-1 rounded-full">Servings: {recipe?.servings}</li>
          <li className="bg-purple-100 border border-purple-900 text-purple-700 px-2 py-1 rounded-full">Spoonacular score: {Math.floor(recipe?.spoonacularScore)}</li>
        </ul>
        <p className="bg-orange-100 text-orange-700 md:text-center ml-[-10px] lg:pl-4 lg:m-10 my-8 w-[24rem] md:w-[26rem] md:ml-[11.5rem] rounded-full flex justify-evenly">
          <LuLeaf fontFamily="7" className="my-1" />
          <span>
            This recipe contains {recipe.extendedIngredients.length} extended
            ingredients.
          </span>
          <IoIosInformationCircleOutline
            fontFamily="10"
            className="my-1 font-bold"
          />
        </p>
        <SocialMediaHandles />
      </div>
    </div>
  );
};

export default BasicRecipeDetails;
