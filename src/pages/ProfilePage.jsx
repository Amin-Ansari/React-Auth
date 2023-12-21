import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import "../utilities/ProfilePage.css";
import "../utilities/AuthForm.css";

const ProfilePage = () => {
  const token = useSelector((state) => state.userIdToken);

  return (
    <>
      <h2 className="profile-page-title ">Your User Profile</h2>
      <Form method="POST" className="auth-form change-password-form">
        <label className="form-label">New Password</label>
        <input
          type="password"
          name="new-password"
          className="auth-form-input pass-change-input"
        ></input>
        <button type="submit" className="change-the-pass-button">
          Change the Password
        </button>
      </Form>
    </>
  );
};

export default ProfilePage;

export const chengeThePasswordAction = async ({ request }) => {
  const submittedForm = await request.formData();

  const token = localStorage.getItem("idToken");

  const changePasswordRequestdata = {
    idToken: JSON.parse(token),
    password: submittedForm.get("new-password"),
    returnSecureToken: true
  };

  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDxyJkR3KrdaxvXif_GhRPCP3Wx4RN1ZQs`;
  const changePasswordRequest = await fetch(url, {
    method: request.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changePasswordRequestdata)
  });

  return changePasswordRequest;
};
