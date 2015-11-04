/** @flow */

require('./styles.css');
import React from 'react';
import Button from 'Button';
import LoggedInHandler from 'LoggedInHandler';

var {PropTypes} = React;

class Header extends LoggedInHandler {

  constructor() {
    super();

    this.state.transitionTo = 'none';

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.logoutUser();
    this.context.router.transitionTo('home');
  }

  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
          className = `Header is-${type}`;

    var css = {
      ham: {
        "font-size": "4em"
      },
      logo: {
        height : "100px",
        width : "100px"
      },
      topNav : {
        link : {
          "margin-left" : "5px",
          "margin-right" : "5px"
        },
        
        "display": "flex",
        "justify-content": "space-between"
      }
    };

    let userNav = (
      <div style={css.topNav.accountLinks}>
        <a style={css.topNav.link} href="register">Create Account</a> | <a style={css.topNav.link} href="login">Login</a>
      </div>
    );

    let authNav = "";
    if(this.state.user){
      let {user} = this.state;
      authNav = (
        <div style={css.topNav.accountLinks}>
          <p>Welcome {user.first_name} | <a href="" onClick={this.handleLogout} >Logout</a></p>
        </div>
      );
    }

    return (

      <div className="Header">


          <div id="topNav" style={css.topNav}>
            <i className="fa fa-bars" style={css.ham}></i>
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
            
            
              { this.state.user ? authNav : userNav }      
            
            
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
