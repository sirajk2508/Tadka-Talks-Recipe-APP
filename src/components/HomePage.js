import { Link } from "react-router-dom";
import { BACKGROUND_IMG_BANNER } from "../libs/constants.js";

const HomePage = () => {
  return (
    <div>
      <img
        alt="background-banner"
        src={BACKGROUND_IMG_BANNER}
        className="w-full h-[100vh] absolute"
      />
      <div className="relative px-96 py-52">
        <h1 className="font-primary text-8xl font-extrabold">
          Cooking Made Simple
        </h1>
        <p className="text-2xl text-center py-5 text-gray-700 font-semibold">
          Delicious, simple recipes that will make you look like a kitchen
          goddess!
        </p>
        <Link to="/listedrecipe"><button className='bg-red-500 text-white px-6 py-2 rounded-lg ml-[19rem] hover:font-semibold'>Start now</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
