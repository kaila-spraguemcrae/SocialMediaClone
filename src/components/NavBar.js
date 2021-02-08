import React from "react";

function NavBar(){
  return (
    <React.Fragment>
      <div className="nav-bar">
        <h3 className= "nav-links">Home</h3>
        <h3 className= "nav-links">Notification</h3>
        <h3 className= "nav-links">Messages</h3>
        <button className= "tweet-button">Tweet</button>
        <input className= "tweet-button" placeholder="Tweet"/>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default NavBar;