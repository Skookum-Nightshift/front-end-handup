/** @flow */

require('./styles.css');

import React from 'react';
import BaseForm from 'BaseForm';
var {PropTypes} = React;

class CountInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amount: props.amount || 0,
      quantity: props.quantity || 0
    };

    this.renderPriceButtons = this.renderPriceButtons.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  updateQuantity() {
    let quantity = this.refs.quantity.getDOMNode().value;
    this.setState({quantity}, ()=>{this.props.onChange(this.state.amount, this.state.quantity);});
  }

  updateAmount(amount) {
    this.setState({amount, quantity: 1}, ()=>{this.props.onChange(this.state.amount, this.state.quantity);});
  }

  renderPriceButtons(prices) {
    let {amount} = this.state;
    return prices.map(price => (
      <div className={'PriceButton' + (amount === price ? ' is_selected' : '')}
           onClick={this.updateAmount.bind(this, price)}>
        <span className="PriceButton-Sign">$</span>
        <span className="PriceButton-Price">{price}</span>
      </div>
    ));
  }

  render(): ?ReactElement {

    let amounts = [5, 10, 15, 25];
    let {amount, quantity} = this.state;
    let total = quantity * amount;

    return (
      <div className="CountInputOptions" style={this.props.style}>
        <div className="PriceButtons">
          {this.renderPriceButtons(amounts)}
          <div className="CountInput-Quantity">
            <div className="CountInput-QuantityTitle">QTY</div>
            <input className="CountInput-QuantityInput" type="number"
                  onChange={this.updateQuantity} ref="quantity" value={quantity} />
          </div>
        </div>
        <div className="CountInput-Total">
          <div className="CountInput-TotalWrapper">
            ${total.toFixed(2)}
          </div>
        </div>
      </div>
    );
  }
}

CountInput.propTypes = {
};

CountInput.defaultProps = {
};

export default CountInput;
