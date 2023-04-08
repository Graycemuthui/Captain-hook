import { useState } from "react";
import Login from "./login";
import Logout from "./logout";
import PrivateText from "./private_text";
import Customer from "../components/customer";
import Signup from "./signup";

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);

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
      {show ? <Login setShow={setShow} /> : <Signup setShow={setShow} />}
    </div>
  );
};
export default User;
