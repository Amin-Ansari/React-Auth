//React stuff
import { useEffect } from "react";

//Components and other pages
import ResponsiveContainer from "../containers/ResponsiveContainer";
import Header from "../components/header/Header";

//Other functions and modules
import getExpirationDuration from "../Auth/ExpirationDuration";

//React-Router stuff
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

const RootPage = () => {
  const token = useLoaderData();
  const sumbit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    const expirationDuraiton = getExpirationDuration();

    if (expirationDuraiton < 0) {
      sumbit(null, { action: "/logout", method: "post" });
    }

    setTimeout(() => {
      sumbit(null, { action: "/logout", method: "post" });
    }, expirationDuraiton);
  }, [token]);

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
