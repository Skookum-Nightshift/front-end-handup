
require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import CardStore from '../../stores/CardStore';
import BaseForm from 'BaseForm';
import TitlePageBase from 'TitlePageBase';
import CountInput from 'CountInput';

class Register extends React.Component {

  constructor(){
    super();

    var card = CardStore.getState().card || {};
    console.log(card);

    this.state = {

      first_name: card.firstName || '',
      last_name: card.lastName || '',

      email: card.email || '',
      password: '',
      password_confirmation: '',

      amount: card.amount || 0,
      quantity: card.quantity || 0,

      streetaddress: '',
      city: '',
      state: '',
      zip: '',

      ccn: '',
      expDate: '',
      ccv: '',

      err: '',
      auth_token: ''

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.addPaymentMethod = this.addPaymentMethod.bind(this);
    this.addPurchase = this.addPurchase.bind(this);
    this.updateCards = this.updateCards.bind(this);
  };

  handleSubmit(){

    this.registerUser();

  };

  registerUser(cb){
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
      'v1/sign_up', //path
      reg,
      (reg) => {
        UserActions.updateUser(reg);
        this.addPaymentMethod(reg);
        console.log(reg);
        console.log(reg.auth_token);
        //this.setState({ auth_token: "YAAY" });
        console.log(reg);
      }
    );
  };



  addPaymentMethod(reg){

    console.log("Auth: "+reg.auth_token);

    var paymentType = {
      payment_method : {
        "user_id": reg.user_id,
        "cardnumber" : this.state.ccn,
        "ccv" : this.state.ccv,
        "expdate" : this.state.expDate,
        "cardmembername": this.state.first_name
      }
    };

    console.log(paymentType);
    console.log(this.state);
    apiPost(
      "v1/add_card",//path
      paymentType,
      (paymentType) => {
        this.addPurchase(reg);
        console.log(paymentType);
      },
      (error) => {
        console.log(error);
      },
        {'Authorization': `Bearer ${reg.auth_token}`}
    );
  };

  addPurchase(reg){
    var newPurchase = {
      purchase : {
        "user": reg.user_id,
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
      },
      (error) => {
        console.log(error);
      },
        {'Authorization': `Bearer ${reg.auth_token}`}
    );
  };

  updateState(name, value){
    var state = {};
    state[name] = value;
    this.setState(state);
  };

  updateCards(amount, quantity) {
    this.setState({ amount, quantity });
  }

  render(): ?ReactElement {

    let {amount, quantity} = this.state;

    return (
      <TitlePageBase title="Create Account">
        <BaseForm onSubmit={this.handleSubmit} submitText="Create Account" >

          <Input placeholder="First Name" type="text" name="first_name" onInputChange={this.updateState} className="Input50 InputFirstLine" defaultValue={this.state.first_name}/>
          <Input placeholder="Last Name" type="text" name="last_name" onInputChange={this.updateState} className="Input50Push InputFirstLine" defaultValue={this.state.last_name}/>

          <Input placeholder="Email" type="email" name="email" onInputChange={this.updateState} className="Input50" defaultValue={this.state.email}/>
          <Input placeholder="Password" type="password" name="password" onInputChange={this.updateState} className="Input50Push"/>

          <Input placeholder="Confirm Password" type="password" name="password_confirmation" onInputChange={this.updateState} />

          <br/><br/><br/><br/>

          <CountInput onChange={this.updateCards} amount={amount} quantity={quantity} style={{marginTop: 23}} />

          <Input placeholder="Street Address" type="text" name="streetaddress" onInputChange={this.updateState} className="Input50"/>
          <Input placeholder="City" type="text" name="city" onInputChange={this.updateState} className="Input50Push"/>

          <Input placeholder="State" type="text" name="state" onInputChange={this.updateState} className="Input50"/>
          <Input placeholder="Zipcode" type="text" name="zipcode" onInputChange={this.updateState} className="Input50Push"/>

          <br/><br/><br/><br/>

          <Input placeholder="Card #" type="text" name="ccn" onInputChange={this.updateState} className="Input50"/>
          <Input placeholder="Exp" type="monthYear" name="expDate" onInputChange={this.updateState} className="Input50Push"/>

          <Input placeholder="CCV" type="text" name="ccv" onInputChange={this.updateState} className="Input50"/>

          <div className="Alert">
            Would you like to receive alerts when gift card used?
            <Input type="checkbox" name="notification" onInputChange={this.updateState}/>
          </div>
        </BaseForm>
      </TitlePageBase>
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
