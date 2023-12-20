//Utitlites
import "../../utilities/LogoHolder.css";

//Images and other assets
import logo from "../../assets/Logo.png";

const LogoHolder = () => {
  return (
    <div className="log-holder">
      <img src={logo} className="logo-image" />
    </div>
  );
};

export default LogoHolder;
