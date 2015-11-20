require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Anchor from 'Anchor';
import HeroSlider from 'HeroSlider';
import CountInput from 'CountInput';
import LoggedInHandler from 'LoggedInHandler';
import BaseForm from 'BaseForm';
import CardActions from '../../actions/CardActions';

class Home extends LoggedInHandler {

  constructor() {
    super();

    this.state.redirectTo = 'none';
    this.state.amount = 0;
    this.state.quantity = 0;

    this.submitForm = this.submitForm.bind(this);
    this.updateCards = this.updateCards.bind(this);
  }

  updateCards(amount, quantity) {
    this.setState({ amount, quantity });
  }

  submitForm() {
    let redirectTo = 'home';
    var data = {
      amount: this.state.amount,
      quantity: this.state.quantity
    };

    if (!this.state.user) {
      redirectTo = 'register';
      data.firstName = this.refs.firstName.getDOMNode().value;
      data.lastName = this.refs.lastName.getDOMNode().value;
      data.email = this.refs.email.getDOMNode().value;
    }
    CardActions.updateCard(data);
    this.context.router.transitionTo(redirectTo);
  }

  renderForm() {
    if (this.state.user) {
      return (
        <div className="BaseForm-Submit" style={{borderRadius: 8, marginTop: 26}} onClick={this.submitForm}>
          Start Giving
        </div>
      )
    }

    return (
      <BaseForm onSubmit={this.submitForm} submitText="Start Giving" style={{marginTop: 26}}>
        <input className="Input Input50 InputFirstLine" ref="firstName" placeholder="First Name"/>
        <input className="Input Input50Push InputFirstLine" ref="lastName" placeholder="Last Name"/>
        <input className="Input" ref="email" placeholder="Email"/>
      </BaseForm>
    );
  }

 //Render piece, HTML goes here
  render(): ?ReactElement {

    let {amount, quantity} = this.state;
    let form = (quantity > 0 ? this.renderForm() : '');

    return (
      <div>
        <HeroSlider />
        <div className="CountInput">
          <div className="CountInputContent">
            <div className="CountInputContent-Title">
              Select Amount to Give
            </div>
            <CountInput onChange={this.updateCards} amount={amount} quantity={quantity} />
            {form}
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.contextTypes = {
  router: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
