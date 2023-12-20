//Utilities like, CSS files
import "../utilities/ContainerFluid.css";

const ContainerFluid = ({ children }) => {
  return <div className="container-fluid">{children}</div>;
};

export default ContainerFluid;
