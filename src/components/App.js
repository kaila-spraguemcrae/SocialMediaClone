import React from "react";
import Feed from "./Feed";
import NavBar from "./NavBar"
import UserProfile from "./UserProfile";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <UserProfile />
      <Feed />
    </React.Fragment>
  );
}

export default App;
