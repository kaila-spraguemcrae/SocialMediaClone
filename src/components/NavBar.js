import React from "react";

function NavBar(){
  return (
    <React.Fragment>
      <div className="nav-bar">
        <h3 className= "nav-links">Home</h3>
        <h3 className= "nav-links">Notification</h3>
        <h3 className= "nav-links">Messages</h3>
        <input className= "tweet-button" placeholder="Tweet"/>
        <button className= "tweet-button">Tweet</button>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default NavBar;