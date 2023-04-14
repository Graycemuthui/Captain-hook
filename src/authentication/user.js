import { useState } from "react";
import Login from "./login";
import Logout from "./logout";
import PrivateText from "./private_text";
import Customer from "../components/customer";
import Signup from "./signup";

const User = ({ currUser, setCurrUser }) => {
  const [show] = useState(true);

  // make sure to check if currUser is valid

  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
        <Customer />
      </div>
    );

  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} />
      ) : (
        <Signup setCurrUser={setCurrUser} />
      )}
    </div>
  );
};
export default User;
