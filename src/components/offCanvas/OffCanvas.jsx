//React-Router stuff
import { NavLink } from "react-router-dom";

//Icons and other assets
import { MdClose } from "react-icons/md";

//Utilities
import "../../utilities/OffCanvas.css";

const OffCanvas = (props) => {
  return (
    <div className="off-canvas-container">
      <button
        className="close-off-canvas-button"
        onClick={() => props.onVisibilityToggle()}
      >
        <MdClose />
      </button>
      <div className="nav-container">
        <nav className="off-canvas-navigation">
          <ul>
            <li className="off-canvas-nav-links">
              <NavLink to={""}>Home</NavLink>
            </li>
            <li className="off-canvas-nav-links">
              <NavLink to={"login-signup"}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OffCanvas;
