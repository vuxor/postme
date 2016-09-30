import React from 'react';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

const UserPublicPosts = () =>
  <div>
    <h2 className="header">My public posts</h2>
    <PostListWrapper
      perPage={5}
      sub={'Posts.user.public'}
    />
  </div>;

export default UserPublicPosts;
