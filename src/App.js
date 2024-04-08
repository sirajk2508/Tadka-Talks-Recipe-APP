import HomePage from "./components/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListedRecipes from "./components/ListedRecipes";
import RecipeDetails from "./components/RecipeDetails";
import AppLayout from "./components/AppLayout";
import ErrorMessage  from "./components/ErrorMessage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "listedrecipe",
        element: <ListedRecipes />,
      },
      {
        path: "/recipedetail/:id",
        element: <RecipeDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={appRouter}>
      <HomePage />
    </RouterProvider>
  );
}

export default App;

/*
https://api.spoonacular.com/recipes/random?apiKey=1d1f9d12eb34430f8e520ae79d1145f2&number=1&include-tags=vegetarian,dessert&exclude-tags=quinoa

https://api.spoonacular.com/recipes/complexSearch?apiKey=1d1f9d12eb34430f8e520ae79d1145f2&query=pasta&maxFat=25&number=2
*/
