import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h1>No user</h1>;

  return <div>{user.username}</div>;
}

export default Profile;
