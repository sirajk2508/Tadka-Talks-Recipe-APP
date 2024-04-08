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
