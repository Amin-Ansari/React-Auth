//React stuff
import { useEffect, useState } from "react";

//Components and other pages
import Loader from "../Loaders/Loader";

//React-Router
import { Form, useActionData, useNavigation, redirect } from "react-router-dom";

//Utilities
import "../../utilities/AuthForm.css";

const AuthForm = (props) => {
  const { formMethod, formType, onFormTypeChange } = props;

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const actionData = useActionData();

  const formNavigation = useNavigation();

  let type = formType === "LOGIN" ? "Login" : "Sign up";

  useEffect(() => {
    if (actionData) {
      if (actionData.error) {
        if (actionData.error & (actionData.error.message === "INVALID_EMAIL")) {
          setEmailError(
            type === "Login" ? "The Email does not exist" : "Email is invalid"
          );
        } else {
          setPasswordError(
            type === "Login"
              ? "The password is incorrect!"
              : "Password is invalid, It must be at least 6 charactor"
          );
        }
      }
    }
  }, [actionData]);

  return (
    <>
      <Form className="auth-form" method={formMethod}>
        <h2 className="form-title">{type}</h2>
        <label className="form-label" htmlFor="#email-input">
          Your Email
        </label>
        <input
          type="email"
          className="auth-form-input"
          name="email"
          id="email-input"
        ></input>

        <p className="invalid-error">{emailError}</p>

        <label className="form-label" htmlFor="#password-input">
          Your Password
        </label>
        <input
          type="password"
          className="auth-form-input"
          name="password"
          id="password-input"
        ></input>

        <p className="invalid-error">{passwordError}</p>

        <input
          type={"submit"}
          name="submit"
          className="submit-input"
          value={type}
        ></input>
        <button
          type="button"
          className="form-type-change-button"
          onClick={() => onFormTypeChange()}
        >
          {formType === "LOGIN" && "Create new account"}
          {formType === "SIGNUP" && "Already have and account?"}
        </button>
      </Form>
      {formNavigation.state === "submitting" && <Loader />}
    </>
  );
};

export default AuthForm;

export const signUpAction = async ({ request }) => {
  const submittedData = await request.formData();

  const signUpData = {
    email: submittedData.get("email"),
    password: submittedData.get("password"),
    returnSecureToken: true
  };

  const actionType = submittedData.get("submit");

  const signUpBaseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
  const signInBaseUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`;
  const key = `AIzaSyDxyJkR3KrdaxvXif_GhRPCP3Wx4RN1ZQs`;

  let fullUrl = `${signUpBaseUrl}${key}`;

  if (actionType === "Login") {
    fullUrl = `${signInBaseUrl}${key}`;
  }

  const signUpRequest = await fetch(fullUrl, {
    method: request.method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(signUpData)
  });

  if (signUpRequest.ok) {
    const response = await signUpRequest.json();
    localStorage.setItem("idToken", JSON.stringify(response.idToken));
    const time = new Date();
    time.setHours(time.getHours() + 1);
    localStorage.setItem("expiration", time.toISOString());
    return redirect("/");
  }

  return signUpRequest;
};
