//React-Router stuff
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return <div></div>;
};

export default ErrorPage;
