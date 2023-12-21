import { useState } from "react";
import AuthForm from "../components/Form/AuthForm";

const LoginPage = () => {
  const [formType, setTheFormType] = useState("LOGIN");

  function changeTheFormType() {
    setTheFormType((state) => (state === "LOGIN" ? "SIGNUP" : "LOGIN"));
  }

  return (
    <>
      <AuthForm
        onFormTypeChange={changeTheFormType}
        formType={formType}
        formMethod="POST"
      />
    </>
  );
};

export default LoginPage;
