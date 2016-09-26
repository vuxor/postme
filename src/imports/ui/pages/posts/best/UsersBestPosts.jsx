import React from 'react';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

const UsersBestPosts = () => (
  <div>
    <h2 className="header">Top voted posts</h2>
    <PostListWrapper
      perPage={10}
      sub={'Posts.best'}
    />
  </div>
);
export default UsersBestPosts;
