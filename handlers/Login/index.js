require('./styles.css');
	
import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';
import Header from 'Header';
import Footer from 'Footer';

class Login extends React.Component {

	constructor(){
		super();
		this.state = {
			email: "",
			password: "",
			err: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateState = this.updateState.bind(this);
	}

	handleSubmit(){
		console.log(this.state.email, this.state.password, this.state.err);

		apiPost(
			"v1/sign_in",//path
			this.state,
			(data) => {
				console.log(data);
			}
		);
	}

	updateState(name, value){
		var state = {};
		state[name] = value;
		this.setState(state);
	}

	stayLoggedIn(){
		//Store cookie for user w/ email in it. 
		$.cookie("cookie", "YES", {path:'/'});
	}

  render(): ?ReactElement {
    return (
		<div>
		
			<Header />

			<div className="LoginForm">
				<p>Login<br/>Enter user name and password below</p>
				<Input className="input" placeholder="email" value={this.state.email} onInputChange={this.updateState} type="email" name="email"/>
				<br/>
				<Input className="input" placeholder="password" value={this.state.password} onInputChange={this.updateState} type="password" name="password"/>
				<br/>
				<Input className="input" type="checkbox" name="persist"/> Keep me logged in?   	
				<br/>
				<Button className="button" onClick={this.handleSubmit} type="pink">Login</Button>
			</div>

			<Footer />

		</div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Login.propTypes = { };

Login.displayName = 'Login';

//export default Login;
export default Resolver.createContainer(Login, {
  resolve: {

  },
});
