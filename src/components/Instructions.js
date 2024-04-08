import React from "react";

const Instructions = ({steps}) => {
  return (
    <div className="Instructions-container col-span-2">
      <h1 className="text-2xl font-bold text-center lg:text-start">Instructions</h1>
      <p className="lg:w-[98%] my-2 mx-6 lg:mx-0 border border-gray-600 pr-40"></p>
      <ol className="mt-5 pr-8 font-medium h-64 w-full overflow-y-scroll shadow-sm">
        {steps.map((step, index) => (
          <li key={index} className="mb-3 pr-10 flex">
            <span className="bg-gray-200 rounded-full text-center h-8 w-8 px-3 mx-2 py-1 text-sm font-semibold pr-6">
              {index + 1}.
            </span>
            <p>{step.step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instructions;
