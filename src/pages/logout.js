import { redirect } from "react-router";

const LogoutAciton = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("expiration");
  return redirect("/");
};

export default LogoutAciton;
