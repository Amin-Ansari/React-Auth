//React-Router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components or pages
import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

//React-redux
import { useSelector } from "react-redux";

//Router action and loader functions
import { signUpAction } from "./Form/AuthForm";
import { chengeThePasswordAction } from "../pages/ProfilePage";

function App() {
  const userAuth = useSelector((state) => state.isUserAuthorized);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "login-signup",
          element: !userAuth ? <LoginPage /> : <ProfilePage />,
          action: signUpAction
        },
        {
          path: "profile",
          element: userAuth ? <ProfilePage /> : undefined,
          action: chengeThePasswordAction
        }
      ]
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
