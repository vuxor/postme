import React from 'react';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

const UsersBestPosts = () => (
  <div>
    <PostListWrapper
      perPage={10}
      sub={'Posts.best'}
    />
  </div>
);
export default UsersBestPosts;
