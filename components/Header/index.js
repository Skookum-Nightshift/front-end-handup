/** @flow */

require('./styles.css');
import React from 'react';
import Button from 'Button';
import LoggedInHandler from 'LoggedInHandler';

var {PropTypes} = React;

class Header extends LoggedInHandler {

  constructor() {
    super();

    this.state.redirectTo = 'none';

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(){
    this.logoutUser();
    this.context.router.transitionTo('home');
  }

  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
          className = `Header is-${type}`;

    let unAuthNav = (
        <div className="Header-TopNav">
          <div className="Header-TopNav-Logo">
            <a href="#">
              <img src="./public/images/logo.png" alt="Logo"/>
            </a>
          </div>
          <div className="Header-TopNav-AuthNav">
            <a className="Header-TopNav-Register" href="register">Create Account</a><a className="Header-TopNav-Login" href="login">Login</a>
          </div>   
        </div>
    );

    let authNav = "";

    if(this.state.user){
      let {user} = this.state;
      authNav = (
        
          <div className="Header-TopNav">
            <div className="Header-TopNav-Logo">
              <a href="#">
                <img src="./public/images/logo.png" alt="Logo"/>
              </a>
            </div>
            <div>
              <p>Welcome {user.first_name} | <a href="" onClick={this.handleLogout} >Logout</a></p>
            </div>     
          </div>
      );
    }

    var authClass = this.state.user ? "-Auth" : "";

    return (
      <div className={"Header"+authClass}>
          { this.state.user ? authNav : unAuthNav }      
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
