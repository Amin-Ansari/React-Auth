import { Form } from "react-router-dom";
import "../utilities/ProfilePage.css";
import "../utilities/AuthForm.css";

const ProfilePage = () => {
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
