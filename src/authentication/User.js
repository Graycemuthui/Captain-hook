import { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import PrivateText from "./Private_text";
import Customer from "../components/Customer.js";
import Signup from "./Signup";

const User = ({ currUser, setCurrUser }) => {
  const [show] = useState(true);

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
