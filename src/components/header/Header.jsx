//React stuff
import { createPortal } from "react-dom";
import { useState } from "react";

//Components and other pages
import LogoHolder from "./LogoHolder";
import NavigationBar from "./NavigationBar";
import OffCanvas from "../offCanvas/OffCanvas";

//Utilities
import "../../utilities/Header.css";

const OffCanvasPortal = ({ isVisible, toggleVisibility }) => {
  return createPortal(
    isVisible && <OffCanvas onVisibilityToggle={toggleVisibility} />,
    document.getElementById("overlay-root")
  );
};

const Header = () => {
  const [isOffcanvasVisible, setOffcanvasVisibility] = useState(false);

  const toggleOffcanvasVisibility = () => {
    setOffcanvasVisibility((state) => !state);
  };
  return (
    <header className="header">
      <OffCanvasPortal
        isVisible={isOffcanvasVisible}
        toggleVisibility={toggleOffcanvasVisibility}
      />
      <LogoHolder />
      <NavigationBar onVisibilityToggle={toggleOffcanvasVisibility} />
    </header>
  );
};

export default Header;
