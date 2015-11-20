
require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
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

			amount: "",
			quantity: "",

			streetaddress: "",
			city: "",
			state: "",
			zip: "",

			ccn: "",
			expDate: "",
			ccv: "",

			err: ""

		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateState = this.updateState.bind(this);
		this.registerUser = this.registerUser.bind(this);
		this.addPaymentMethod = this.addPaymentMethod.bind(this);
		this.addPurchase = this.addPurchase.bind(this);
	};

	componentDidMount(){

		
	}

	handleSubmit(){
		
		this.registerUser();

		this.addPaymentMethod();

		this.addPurchase();


	};

	registerUser(){
		var status = false;
		var reg = {
			user : {
				first_name : this.state.first_name,
				last_name : this.state.last_name,
				email : this.state.email,
				streetaddress : this.state.streetaddress,
				city : this.state.city,
				state : this.state.state,
				zip : this.state.zipcode
			},
			password : this.state.password,
			password_confirmation : this.state.password_confirmation
		};
		
		console.log(reg);

		apiPost(
			"v1/sign_up",//path
			reg,
			(reg) => {
				console.log(reg);

			}
		);
	};

	addPaymentMethod(){
		var paymentType = {
			payment_method : {
				"cardnumber" : this.state.ccn,
		        "ccv" : this.state.ccv,
		        "expdate" : this.state.expDate,
		        "cardmembername": this.state.first_name
			}
		};
		
		console.log(paymentType);

		apiPost(
			"v1/add_card",//path
			paymentType,
			(paymentType) => {
				console.log(paymentType);
			}
		);
	};

	addPurchase(){
		var newPurchase = {
			purchase : {
				"user" : this.state.first_name,
		        "time" : new Date(),
		        "amount" : this.state.amount,
		        "quantity": this.state.quantity,
		        "deliverymethod" : "print"
			}
		};
		
		console.log(newPurchase);

		apiPost(
			"v1/add_purchase",//path
			newPurchase,
			(newPurchase) => {
				console.log(newPurchase);
			}
		);
	};

	updateState(name, value){
		var state = {};
		state[name] = value;
		this.setState(state);
	};

	render(): ?ReactElement {
		return (
			
			<div className="Container">
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
								<Input placeholder="Street Address" type="text" name="streetaddress" onInputChange={this.updateState}/>
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
								<Input placeholder="Card #" type="text" name="ccn" onInputChange={this.updateState}/>
								<br/>
								<label>Exp. Date</label>
								<Input placeholder="Exp" type="text" name="expDate" onInputChange={this.updateState}/>
								<br/>
								<label>CCV</label>
								<Input placeholder="CCV" type="text" name="ccv" onInputChange={this.updateState}/>				   	
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
								<Button className="button" onClick={this.handleSubmit} type="pink">Register</Button>
					   		</div>
					   	</div>

					</div>
				</div>

				<Footer />
			</div>
		);
	}
};
Register.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Register.propTypes = { };

Register.displayName = 'Register';

//export default Register;
export default Resolver.createContainer(Register, 
	{ resolve: { },
});
