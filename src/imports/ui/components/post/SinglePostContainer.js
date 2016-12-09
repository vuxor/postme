import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import { Posts } from '../../../api/posts/posts';
import SinglePostCard from './SinglePostCard';

export default createContainer(props => {
  const postHandle = Meteor.subscribe('Posts.singlePost', props.id);
  const loading = !postHandle.ready();
  return {
    post: Posts.findOne(props.id),
    loading,
  };
}, SinglePostCard);
