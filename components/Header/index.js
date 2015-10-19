/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Header extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `Header is-${type}`;

    return (
      //<a {...props} href={href} className={className}>
      //  {children}
      //</a>
      <div id="topNav" class="topNav">
      
      <div class="appLogo">
        <a href="#">
          <img src="./appLogo.png" alt="Logo"/>
        </a>
      </div>

      <div class="pageLinks">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/stories">Stories of Hope</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/">Why Gift Cards?</a>
          </li>
        </ul>
      </div>

      <div class="accountLinks">
        <ul>
          <li>
            <a href="register">Create Account</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
        </ul>
      </div>

    </div>
    );
  }
}

Header.propTypes = {
  type: PropTypes.oneOf(['black', 'grey', 'pink', 'white']),
  children: PropTypes.any.isRequired,
};

Header.defaultProps = {
  type: 'black',
};

export default Header;
