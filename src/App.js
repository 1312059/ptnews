
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import ForYou from "./pages/For You";
import Local from "./pages/Politics"
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import World from "./pages/Environment";
import React from "react";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/foryou",
    element: <ForYou />
  },
  {
    path: "/category/:categoryId",
    element: <NewsCategory />,
  },
  {
    path: "/news/:newsId",
    element: <NewsDetails />,
  },
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}


export default App;
