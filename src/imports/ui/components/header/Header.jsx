import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import AccountsUIWrapper from '../accounts/AccountsUIWrapper.jsx';

export default class Header extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
  }
  render() {
    let list;
    let sideMenu;
    if (this.props.currentUser) {
      list = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/posts/public/best">Hall of fame</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/posts/public">Public posts</Link></li>
          <li><Link to="/posts/private">Private posts</Link></li>
          <li><a><AccountsUIWrapper /></a></li>
        </ul>
      );
      sideMenu = (
        <ul id="mobile-nav" className="side-nav">
          <li><Link to="/posts/public/best">Hall of fame</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/posts/public">Public posts</Link></li>
          <li><Link to="/posts/private">Private posts</Link></li>
        </ul>
      );
    } else {
      list = (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/posts/public/best">Hall of fame</Link></li>
          <li><a><AccountsUIWrapper /></a></li>
        </ul>
      );
      sideMenu = (
        <ul id="mobile-nav" className="side-nav">
          <li><Link to="/posts/public/best">Hall of fame</Link></li>
        </ul>
      );
    }
    return (
      <div className="navbar-fixed">
        <nav className="main-nav">
          <div className="nav-wrapper">
            <li className="brand-logo"><Link to="/">Postme</Link></li>
            <a
              data-activates="mobile-nav"
              className="button-collapse"
            >
              <i className="material-icons">menu</i>
            </a>
            {list}
            {sideMenu}
          </div>
        </nav>
      </div>
    );
  }
  }

Header.propTypes = {
  currentUser: PropTypes.object,
};
