import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

function UserProfile() {
  return (
    <React.Fragment>
      <div className="UserProfile">
        <div className="background"></div>
        <div className="icon">
          <h1 className="icon-picture"><BsFillPersonFill /></h1>
        </div>
        <h4 className="user-links">Tweets</h4>
        <h4 className="user-links">Following</h4>
        <h4 className="user-links">Fololowers</h4>
      </div>
    </React.Fragment>
  );
}
export default UserProfile;