import { Link } from "react-router-dom";
import { BACKGROUND_IMG_BANNER } from "../libs/constants.js";

const HomePage = () => {
  return (
    <div className="relative">
      <img
        alt="background-banner"
        src={BACKGROUND_IMG_BANNER}
        className="w-full h-[100vh] object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-primary text-5xl md:text-8xl font-extrabold">
            Cooking Made Simple
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 font-semibold py-5 px-4 md:px-0">
            Delicious, simple recipes that will make you look like a kitchen
            goddess!
          </p>
          <Link to="/listedrecipe">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:font-semibold">
              Start now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

