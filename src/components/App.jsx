//React hooks, libraries, components and etc

//React-Router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components or pages
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

//Utilities like Css files

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login-signup", element: <LoginPage /> }
      ]
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
