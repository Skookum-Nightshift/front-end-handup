import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';

import Request from '../../lib/requestLib.js';

class Login extends React.Component {

	loginUser(){
		alert();
		Request._apiRequest(true, 'post', 'sign_in', '{"email":"email@email.com", "password":"password"}', '', '', '');
	}

  render(): ?ReactElement {
    return (
      <div className="Login">
        Login
        Enter user name and password below
        <form>
        	
        	<Input placeholder="email"/>
        	<br/>
        	<Input placeholder="password"/>
        	<br/>

        	<Button onClick={this.loginUser} type="pink">
        	Login
        	</Button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Login.displayName = 'Login';

export default Login;
