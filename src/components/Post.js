import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h2>{props.username}</h2>
      <h3>{props.content}</h3>
      <hr />
    </React.Fragment>
  );
}


Post.propTypes = {
  username: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
};

export default Post;
