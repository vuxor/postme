import React, { Component } from 'react';

import PostForm from '../posts/PostForm.jsx';

export default class Footer extends Component {
  showModal() {
    $('#postModal').openModal();
  }
  render() {
    return (
      <div>
        <a
          onClick={this.showModal}
          className="modal-trigger btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </a>

        <div id="postModal" className="modal">
          <PostForm />
        </div>
      </div>
    );
  }
}
