import React from 'react';

import PostListWrapper from '../../../components/posts/PostListWrapper.jsx';

const UserPublicPosts = () => (
  <div>
    <PostListWrapper
      perPage={5}
      sub={'Posts.user.public'}
    />
  </div>
);
export default UserPublicPosts;
