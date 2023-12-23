import { useNavigate } from "react-router";

const useLogout = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("idToken");
    navigate("/");
  };

  return logOut;
};

export default useLogout;
