import React from "react"
import Post from "./Post"

const masterPostList = [
  {
    username: 'Lorem ispsum',
    contents: 'Lorem ipsum dolor sit amet, consectetur asipiscing elit. Nullam'
  },
  {
    username: 'Lorem ispsum',
    contents: 'Lorem ipsum dolor sit amet, consectetur asipiscing elit. Nullam'
  },
  {
    username: 'Lorem ispsum',
    contents: 'Lorem ipsum dolor sit amet, consectetur asipiscing elit. Nullam'
  },
  {
    username: 'Lorem ispsum',
    contents: 'Lorem ipsum dolor sit amet, consectetur asipiscing elit. Nullam'
  },
  {
    username: 'Lorem ispsum',
    contents: 'Lorem ipsum dolor sit amet, consectetur asipiscing elit. Nullam'
  }
];

function Feed() {
  return (
    <React.Fragment>
      <hr />
      <input placeholder="What's happening?" />
      <div className="feed-list">
        {masterPostList.map((post, index) =>
          <Post username={post.username}
            contents={post.contents}
            key={index} />
        )}
      </div>
    </React.Fragment>
  );
}

export default Feed