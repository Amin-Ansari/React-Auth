//React-Router stuff
import { NavLink, useNavigate } from "react-router-dom";

//React-Redux
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../redux/slices/AuthSlice";

//assets
import { TiThMenu } from "react-icons/ti";

//Utileties
import "../../utilities/NavigationBar.css";

const NavigationBar = (props) => {
  const userAuthState = useSelector((state) => state.isUserAuthorized);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const logOutHandler = () => {
    const conformLogout = window.confirm("Are sure that You want to Log out?");

    if (conformLogout) {
      dispatch(authActions.unAuthorizeTheUser());
      navigate("login-signup");
    }
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
          {!userAuthState && (
            <li className="nav-item">
              <NavLink to={"login-signup"}>Login</NavLink>
            </li>
          )}
          {userAuthState && (
            <li className="nav-item">
              <NavLink to={"profile"}>Profile</NavLink>
            </li>
          )}
          {userAuthState && (
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
