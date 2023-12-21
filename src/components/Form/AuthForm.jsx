//Components and other pages
import Loader from "../Loaders/Loader";

//React-Router
import { Form, json, useActionData, useNavigation } from "react-router-dom";

//Utilities
import "../../utilities/AuthForm.css";

const AuthForm = (props) => {
  const { formMethod, formType, onFormTypeChange } = props;

  const formNavigation = useNavigation();

  let type = formType === "LOGIN" ? "Login" : "Sign up";

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
        <label className="form-label" htmlFor="#password-input">
          Your Password
        </label>
        <input
          type="password"
          className="auth-form-input"
          name="password"
          id="password-input"
        ></input>
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

  if (actionType === "LOGIN") {
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
    return signUpRequest;
  } else {
    return json(
      { message: "The sign up was NOT successful!" },
      { status: signUpRequest.status, statusText: signUpRequest.statusText }
    );
  }
};
