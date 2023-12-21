//Utilities
import "../../utilities/Loader.css";

const Waves = () => {
  return (
    <ul className="wave-container">
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
      <li className="wave"></li>
    </ul>
  );
};

const Loader = () => {
  return (
    <div className="loader-container">
      <Waves />
    </div>
  );
};

export default Loader;
