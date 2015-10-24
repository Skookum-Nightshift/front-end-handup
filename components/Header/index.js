/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Header extends React.Component {
  render(): ?ReactElement {

  var {children, type, ...props} = this.props,
        className = `Header is-${type}`;


  var css = {
    logo: {
      height : "100px",
      width : "100px"
    },
    topNav : {
      link : {
        "margin-left" : "5px",
        "margin-right" : "5px"
      },
      "width" : "960px",
      "display": "flex",
      "justify-content": "space-between"
    }
  };

    return (

      <div className="Header">


          <div id="topNav" style={css.topNav}>

            <div style={css.topNav.pageLinks}>
                  <a style={css.topNav.link} href="/about">About</a>
                  <a style={css.topNav.link} href="/stories">Stories of Hope</a>
                  <a style={css.topNav.link} href="/faq">FAQ</a>
                  <a style={css.topNav.link} href="/whygiftcards">Why Gift Cards?</a>
            </div>

            <div style={css.topNav.appLogo}>
              <a href="#">
                <img style={css.logo} src="./public/images/logo.png" alt="Logo"/>
              </a>
            </div>
            
            <div style={css.topNav.accountLinks}>
                  <a style={css.topNav.link} href="register">Create Account</a>
                  <a style={css.topNav.link} href="login">Login</a>
            </div>
            
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
