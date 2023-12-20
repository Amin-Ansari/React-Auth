//Utilities
import "../../utilities/AuthForm.css";

const AuthForm = (props) => {
  const { formMethod, formType, onFormTypeChange } = props;

  let type = formType === "LOGIN" ? "Login" : "Sign up";
  console.log(type);

  return (
    <form className="auth-form" method={formMethod}>
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
      <input type={"submit"} className="submit-input" value={type}></input>
      <button
        type="button"
        className="form-type-change-button"
        onClick={() => onFormTypeChange()}
      >
        {formType === "LOGIN" && "Create new account"}
        {formType === "SIGNUP" && "Already have and account?"}
      </button>
    </form>
  );
};

export default AuthForm;
