import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import Logout from "./logout";
import PrivateText from "./private_text";

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);
  if (currUser)
    return (
      <div>
        Hello {currUser.email}
        <PrivateText currUser={currUser} />
        <Logout setCurrUser={setCurrUser} />
      </div>
    );
  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};
export default User;
