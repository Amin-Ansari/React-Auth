//Components and other pages
import LogoHolder from "./LogoHolder";
import NavigationBar from "./NavigationBar";
//Utilities
import "../../utilities/Header.css";

const Header = () => {
  return (
    <header className="header">
      <LogoHolder />
      <NavigationBar />
    </header>
  );
};

export default Header;
