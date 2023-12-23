//React-Router stuff
import { NavLink, useRouteLoaderData } from "react-router-dom";

//assets
import { TiThMenu } from "react-icons/ti";

//Custom hooks
import useLogout from "../../hooks/useLogout";

//Utileties
import "../../utilities/NavigationBar.css";

const NavigationBar = (props) => {
  const rootRouterLoaderData = useRouteLoaderData("root-page");
  const logout = useLogout();

  const logOutHandler = () => {
    logout();
  };

  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"} end>
              Home
            </NavLink>
          </li>
          {!rootRouterLoaderData && (
            <li className="nav-item">
              <NavLink to={"login-signup"}>Login</NavLink>
            </li>
          )}
          {rootRouterLoaderData && (
            <li className="nav-item">
              <NavLink to={"profile"}>Profile</NavLink>
            </li>
          )}
          {rootRouterLoaderData && (
            <button className="nav-item" onClick={logOutHandler}>
              Log out
            </button>
          )}
        </ul>
      </nav>
      <button
        className="off-canvas-toggle-button"
        onClick={() => props.onVisibilityToggle()}
      >
        <TiThMenu />
      </button>
    </>
  );
};

export default NavigationBar;
