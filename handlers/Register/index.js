
require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';
import Header from 'Header';
import Footer from 'Footer';

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
			
			<div className="Container">

				<Header />

				<div className="AppBody">

				 	<div className="Register">
					   
						<div className="Title">
					   		<p>Register</p>
					   	</div>

					   	<div className="Personal">
							<div className="Name">
								<label>FIRST NAME</label>
								<Input placeholder="First Name" type="text" name="first_name" onInputChange={this.updateState}/>
								<br/>
								<label>LAST NAME</label>
								<Input placeholder="Last Name" type="text" name="last_name" onInputChange={this.updateState}/>
						   	</div>

						   	<div className="Login">
								<label>EMAIL</label>
								<Input placeholder="email" type="email" name="email" onInputChange={this.updateState}/>
								<br/>
								<label>PASSWORD</label>
								<Input placeholder="password" type="password" name="password" onInputChange={this.updateState}/>
								<br/>
								<label>CONFIRM PASSWORD</label>
								<Input placeholder="confirm password" type="password" name="password_confirmation" onInputChange={this.updateState}/>				   	
						   	</div>
						</div>

					   	<div className="Donation">
					   		<div className="Amount">
					   			<label>AMOUNT</label>
					   			<Input placeholder="Amount" type="text" name="amount" onInputChange={this.updateState}/>
					   		</div>
							<div className="Quantity"> 
								<label>QUANTITY</label>
								<Input placeholder="Quantity" type="text" name="quantity" onInputChange={this.updateState}/>				   	
							</div>
					   	</div>

					   	<div className="Contact">
							<div className="Left">
								<p>Store Delivery Address</p>

								<label>STREET ADDRESS</label>
								<Input placeholder="Street Address" type="text" name="street" onInputChange={this.updateState}/>
								<br/>
								<label>CITY</label>
								<Input placeholder="City" type="text" name="city" onInputChange={this.updateState}/>
								<br/>
								<label>STATE</label>
								<Input placeholder="State" type="text" name="state" onInputChange={this.updateState}/>
								<br/>
								<label>ZIP</label>
								<Input placeholder="Zipcode" type="text" name="zipcode" onInputChange={this.updateState}/>
						   	</div>

						   	<div className="Right">
						   		<p>Store Payment Information</p>

						   		<label>Card #</label>
								<Input placeholder="Card #" type="email" name="ccn" onInputChange={this.updateState}/>
								<br/>
								<label>Exp. Date</label>
								<Input placeholder="Exp" type="password" name="expDate" onInputChange={this.updateState}/>
								<br/>
								<label>CCV</label>
								<Input placeholder="CCV" type="password" name="ccv" onInputChange={this.updateState}/>				   	
						   		<br/>
						   		<label>Or pay with...</label>
						   		PayPal, Square, Wallet
						   	</div>
						</div>

					   	<div className="Submit">
					   		<div className="Left">
					   			Would you like to receive alerts when gift card used?
					   			<Input type="checkbox" name="notification" onInputChange={this.updateState}/>				   	
					   		</div>
					   		<div className="Right">
								<Button onClick={this.handleSubmit} type="pink">Register</Button>					   		
					   		</div>
					   	</div>

					</div>
				</div>

				<Footer />
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
