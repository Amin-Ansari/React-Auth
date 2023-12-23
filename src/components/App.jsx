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
import { checkAuthForLoginPage } from "../Auth/GetToken";
import { checkAuthForProfilePage } from "../Auth/GetToken";
import GetToken from "../Auth/GetToken";
import LogoutAciton from "../pages/logout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      id: "root-page",
      loader: GetToken,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "login-signup",
          element: <LoginPage />,
          loader: checkAuthForLoginPage,
          action: signUpAction
        },
        {
          path: "profile",
          element: <ProfilePage />,
          loader: checkAuthForProfilePage,
          action: chengeThePasswordAction
        },
        {
          path: "/logout",
          action: LogoutAciton
        }
      ]
    }
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
