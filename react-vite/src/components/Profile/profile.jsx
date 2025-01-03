import { NavLink } from "react-router-dom";
import { AccountBalance } from "../AccountBalance"

function Profile({ username, firstname, lastname, email }) {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>First Name:</strong> {firstname}</p>
      <p><strong>Last Name:</strong> {lastname}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default Profile;
