import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between m-3">
        <h1 className="font-primary lg:text-5xl text-3xl font-bold lg:px-32">TadkaTalks - <span className="text-2xl md:text-4xl">Recipe App</span></h1>
        <nav>
          <ul className="flex justify-between lg:px-20">
            <li className="lg:m-2 p-2 lg:text-lg text-gray-800 hover:text-black font-bold">
              <Link to="/listedrecipe">Home</Link>
            </li>
            <li className="lg:m-2 p-2 lg:text-lg text-gray-800 hover:text-black font-bold">
              <Link to="/recipedetail/649985">Recipe</Link>
            </li>
          </ul>
        </nav>
      </header>
      <p className="w-full border border-gray-600"></p>
    </>
  );
};

export default Header;
