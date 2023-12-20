//Utilities like, CSS files
import "../utilities/ContainerFluid.css";

const ContainerFluid = ({ children, className }) => {
  return (
    <div className={`container-fluid ${className && className}`}>
      {children}
    </div>
  );
};

export default ContainerFluid;
