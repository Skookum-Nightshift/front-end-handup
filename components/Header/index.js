/** @flow */

require('./styles.css');
import React from 'react';
import Button from 'Button';
import LoggedInHandler from 'LoggedInHandler';
import {Link} from 'react-router';

var {PropTypes} = React;

class Header extends LoggedInHandler {

  constructor() {
    super();

    this.state.redirectTo = 'none';
    this.state.pastImage = false;
  }

  componentDidMount() {
    this.watchUser();
    this.handleNoUser();

    document.onscroll = (event) => {
      if (window.location.pathname !== '/') { return; }
      let {pastImage} = this.state;
      if (!pastImage && document.body.scrollTop > 681) {
        this.setState({pastImage: true});
      } else if (pastImage && document.body.scrollTop < 681) {
        this.setState({pastImage: false});
      }
    };
  }

  render(): ?ReactElement {

    if (typeof window === 'undefined') { return <div></div>; }

    let {user, pastImage} = this.state;

    let nav = user ? (
                <div className="Header-TopNav-AuthNav">
                  <p>Welcome {user.first_name} | <a href="" onClick={this.logoutUser} >Logout</a></p>
                </div>
              ) : (
                <div className="Header-TopNav-AuthNav">
                  <Link className="Header-TopNav-Register" to="/register">Create Account</Link>
                  <Link className="Header-TopNav-Login" to="/login">Login</Link>
                </div>
              );

    return (
      <div className={'Header' + (window.location.pathname === '/' ? ' is_home' : '')}>
        <div className={'Header-TopNav' + (window.location.pathname === '/' ? (pastImage ? ' is_past' : '') : ' is_past')}>
          <div className="Header-TopNav-Logo">
            <Link to="/">
              <img src="./public/images/logo.png" alt="Logo"/>
            </Link>
          </div>
          { nav }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};

Header.defaultProps = {
};

export default Header;
