require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Input from 'Input';
import Button from 'Button';
import {apiPost} from 'requestLib';
import {apiGet} from 'requestLib';
import LoggedInHandler from 'LoggedInHandler';
import TitlePageBase from 'TitlePageBase';
import BaseForm from 'BaseForm';

class Profile extends LoggedInHandler {

  constructor() {
    super();

    this.state.userEdited = false;
    this.state.paymentEdit = false;
    this.state.newCardForm = false;
    this.state.cards = [];
    this.state.payment = {};

    this.updateUserState = this.updateUserState.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
    this.getPaymentMethods = this.getPaymentMethods.bind(this);
    this.getPaymentMethods = this.getPaymentMethods.bind(this);
    this.savePaymentMethod = this.savePaymentMethod.bind(this);
    this.updatePaymentMethodState = this.updatePaymentMethodState.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  componentDidMount() {
    this.watchUser();
    this.handleNoUser();
    this.getPaymentMethods();
  }

  updateUserState(name, value) {
    var {user} = this.state;
    user[name] = value;
    this.setState({ user, userEdited: true });
  }

  updatePaymentMethodState(name, value) {
    var {payment} = this.state;
    payment[name] = value;
    this.setState({ payment, paymentEdit: true });
  }

  updateUserInfo() {
    var userInfo = {
      user : {
        first_name : this.state.user.first_name,
        last_name : this.state.user.last_name,
        email : this.state.user.email,
        streetaddress : this.state.user.streetaddress,
        city : this.state.user.city,
        state : this.state.user.state,
        zip : this.state.user.zipcode
      }
    };

    apiPost(
      "v1/users",//path
      userInfo,
      (data) => {
        console.log(data);
        this.updateUser(userInfo.user);
        this.setState({userEdited: false});
      },
      (data) => {
        console.log(data);
      },
      {'Authorization': `Bearer ${this.state.user.auth_token}`}
    );
  }

  getPaymentMethods() {
    apiGet(
      "v1/get_pay_methods",
      { },
      (data) => {
        console.log(data);
        this.setState({ cards: data.payment });
      },
      (data) => {
        console.log(data);
      }
    );
  }

  savePaymentMethod() {
    var paymentType = {
      payment_method : {
        "cardnumber" : this.state.payment.cardnumber,
        "ccv" : this.state.payment.ccv,
        "expdate" : this.state.payment.expdate,
        "cardmembername": this.state.payment.cardmembername
      }
    };

    apiPost(
      "v1/add_card",//path
      paymentType,
      (paymentType) => {
        console.log(paymentType);
        var cards = this.state.cards;
        cards.push(paymentType);
        this.setState({cards, paymentEdit: false, newCardForm: false});
      },
      (error) => {
        console.log(error);
      },
      {'Authorization': `Bearer ${this.state.user.auth_token}`}
    );

  }

  removeCard(card) {

    var deleteCard = confirm("Are you sure?");
    if(deleteCard){
      var paymentType = { payment_method : card };
      apiPost(
        "v1/remove_card",//path
        paymentType,
        (paymentType) => {
          console.log(paymentType);

          var cards = this.state.cards;
          cards.splice( cards.indexOf(card), 1 );
          this.setState({cards});
        },
        (error) => {
          console.log(error);
        },
        {'Authorization': `Bearer ${this.state.user.auth_token}`}
      );
    }
  }

  handleSubmit() {
    let {userEdited, paymentEdit} = this.state;
    if (userEdited) {
      this.updateUserInfo();
    }
    if (paymentEdit) {
      this.savePaymentMethod();
    }
  }

  openNewCardForm() {
    this.setState({newCardForm: true});
  }

  render(): ?ReactElement {

    if ( typeof window === 'undefined' || !this.state.user ) { return <div></div>; }

    var user = this.state.user || {};

    var {cards, userEdited, paymentEdit} = this.state;
    var {first_name, last_name, email, streetaddress, city, state, zip} = this.state.user;
    var text = userEdited || paymentEdit ? 'Update' : '';
    return (
      <TitlePageBase title="My CHANGE Account">
        <BaseForm submitText={text} onSubmit={this.handleSubmit.bind(this)} disabled={!userEdited && !paymentEdit}>
          <Input defaultValue={first_name} type="text" name="first_name" onInputChange={this.updateUserState} className="Input50 InputFirstLine" />
          <Input defaultValue={last_name} type="text" name="last_name" onInputChange={this.updateUserState} className="Input50Push InputFirstLine" />

          <Input defaultValue={email} type="text" name="email" onInputChange={this.updateUserState} />

          <div>
            <h3>Delivery Address</h3>
            <Input defaultValue={streetaddress} placeholder="Street Address" type="text" name="streetaddress" onInputChange={this.updateUserState} className="Input50"/>
            <Input defaultValue={city} placeholder="City" type="text" name="city" onInputChange={this.updateUserState} className="Input50Push" />
            <Input defaultValue={state} placeholder="State" type="text" name="state" onInputChange={this.updateUserState} className="Input50"/>
            <Input defaultValue={zip} placeholder="Zipcode" type="text" name="zipcode" onInputChange={this.updateUserState} className="Input50Push"/>
          </div>

          <div>
            <h3>Notification Preferences</h3>
            <div>Send me updates and news  from CHANGEapp.io and get notified when we  release new features <Input type="checkbox" style={{marginLeft: 15}} name="value" onInputChange={this.updateState}/></div>
            <div>Notify me when cards are used <Input type="checkbox" style={{marginLeft: 15}} name="value" onInputChange={this.updateState}/></div>
          </div>

          <div>
            <h3>Payment Preferences</h3>
            {this.state.newCardForm ? (
              <div>
                New Card
                <Input onInputChange={this.updatePaymentMethodState} placeholder="Card Member Name" name="cardmembername" type="text" />
                <Input onInputChange={this.updatePaymentMethodState} placeholder="CC Number" name="cardnumber" type="text" />
                <Input onInputChange={this.updatePaymentMethodState} placeholder="Exp Date" name="expdate" type="text" />
                <Input onInputChange={this.updatePaymentMethodState} placeholder="CCV" name="ccv" type="text" />
              </div>
            ) : (<Button onClick={this.openNewCardForm.bind(this)} >+ Card</Button>)}


            {
              cards.map( (card)=>(
                <div>
                  {card.cardmembername}&nbsp;
                  {card.cardnumber}&nbsp;
                  {card.expdate}&nbsp;
                  {card.ccv}&nbsp;
                  <a onClick={this.removeCard.bind(this, card)} >Remove</a>
                </div>
              ))
            }
          </div>
        </BaseForm>
      </TitlePageBase>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Profile.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Profile.displayName = 'Profile';

//export default Profile;
export default Resolver.createContainer(Profile, {
  resolve: { },
});
