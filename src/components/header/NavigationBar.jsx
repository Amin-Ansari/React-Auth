//React-Router stuff
import { NavLink } from "react-router-dom";

//assets
import { TiThMenu } from "react-icons/ti";

//Utileties
import "../../utilities/NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"login-signup"}>Login</NavLink>
          </li>
        </ul>
      </nav>
      <button className="off-canvas-toggle-button">
        <TiThMenu />
      </button>
    </>
  );
};

export default NavigationBar;
