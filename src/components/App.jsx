//React-Router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components or pages
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

//Router action and loader functions
import { signUpAction } from "./Form/AuthForm";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login-signup", element: <LoginPage />, action: signUpAction }
      ]
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
