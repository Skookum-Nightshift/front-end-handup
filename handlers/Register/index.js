import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';

class Register extends React.Component {

	constructor(){
		super();
		this.state = {		
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			password_confirmation: "",
			err: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateState = this.updateState.bind(this);
	}

	handleSubmit(){
		console.log(

			this.state.first_name, 
			this.state.last_name, 
			this.state.email, 
			this.state.password, 
			this.state.password_confirmation, 
			this.state.err
		);

		var reg = {
			user : {
				first_name : this.state.first_name,
				last_name : this.state.last_name,
				email : this.state.email
			},
			password : this.state.password,
			password_confirmation : this.state.password_confirmation
		}
		console.log(reg);
		apiPost(
			"v1/sign_up",//path
			reg,
			(reg) => {
				console.log(reg);
			}
		);
	}

	updateState(name, value){
		var state = {};
		state[name] = value;
		this.setState(state);
	}

	render(): ?ReactElement {
		return (
		 	<div className="Register">
			    Register<br/>
			   
			    <Input placeholder="First Name" type="text" name="first_name" onInputChange={this.updateState}/>
				<br/>
				<Input placeholder="Last Name" type="text" name="last_name" onInputChange={this.updateState}/>
				<br/>
				<Input placeholder="email" type="email" name="email" onInputChange={this.updateState}/>
				<br/>
				<br/>
				<Input placeholder="password" type="password" name="password" onInputChange={this.updateState}/>
				<br/>
				<Input placeholder="confirm password" type="password" name="password_confirmation" onInputChange={this.updateState}/>
				<br/>

				<Button onClick={this.handleSubmit} type="pink">Register</Button>
			</div>
		);
	}
}
Register.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Register.propTypes = { };

Register.displayName = 'Register';

//export default Register;
export default Resolver.createContainer(Register, 
	{ resolve: { },
});
