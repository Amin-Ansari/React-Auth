//Utilities like, CSS files
import "../utilities/Container.css";

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
