import React, { Component } from 'react';
import { Materialize } from 'meteor/materialize:materialize';

import PostForm from '../posts/PostForm.jsx';

export default class Footer extends Component {
  componentDidMount() {
    $('.tooltipped').tooltip({ delay: 50 });
  }
  showModal() {
    if (Meteor.userId()) {
      $('#postModal').openModal();
    } else {
      Materialize.toast('Please login first', 4000);
    }
  }
  render() {
    return (
      <div>
        <a
          data-position="left"
          data-delay="50"
          data-tooltip="Add new post"
          onClick={this.showModal}
          className="tooltipped
          add-new-post modal-trigger btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </a>

        <div id="postModal" className="modal">
          <div className="row">
            <div className="col s12">
              <h3>Add new post</h3>
            </div>
          </div>
          <PostForm post={null} />
        </div>
      </div>
    );
  }
}
