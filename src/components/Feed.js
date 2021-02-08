import React from "react"
import Post from "./Post"

const masterFeedList = [
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
  <React.Fragment>
    <hr />
    <input placeholder="What's happening?" />
    <div className="feed-list">
      {masterFeedList.map((post, index) =>
        <Feed username={post.username}
          contents={post.contents}
          key={index} />
      )}
    </div>
  </React.Fragment>
}

export default Feed;