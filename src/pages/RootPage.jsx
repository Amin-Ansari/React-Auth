//Components and other pages
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Header from "../components/header/Header";

//React-Router stuff
import { Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <ResponsiveContainer className="header-background-color">
        <Header />
      </ResponsiveContainer>
      <ResponsiveContainer>
        <Outlet />
      </ResponsiveContainer>
    </>
  );
};

export default RootPage;
