import { redirect } from "react-router";

const GetToken = () => {
  const token = localStorage.getItem("idToken");
  return token;
};

export const checkAuthForLoginPage = () => {
  if (GetToken()) return redirect("/profile");
  return null;
};

export const checkAuthForProfilePage = () => {
  if (!GetToken()) return redirect("/login-signup");
  return null;
};

export default GetToken;
