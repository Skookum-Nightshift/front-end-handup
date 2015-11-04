require('./styles.css');
require('../styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';


class FAQ extends React.Component {

  render(): ?ReactElement {
    return (
      <div>
        	<div className="FAQ">
           
            <p className="PageTitle">FAQ</p>
            
            <div className="Summary">
              <p>We provide gift cards that are only redeemable at stores that do not sell liquor or tobacco products. Individuals or larger organizations can select the amount and quantity of cards to give to their neighbors in need without the worry of how their investment will be spent. Don&lsquo;t carry cash? No problem. By keeping a couple of $5 gift cards in your wallet you&lsquo;ll be fully prepared to brighten someone&lsquo;s day! It takes less than 5 minutes to get started--are you ready to &lsquo;change&lsquo; your community?</p>
            </div>

            <div className="Questions">
              <div>
                <p>What happens if I lose my gift card?</p>
                <p>Body</p>
              </div>
              <div>
                <p>What happens if my gift card is never redeemed?</p>
                <p>Body</p>
              </div>
              <div>
                <p>What happens if someone tries to buy liquor or tobacco products with the gift card?</p>
                <p>Body</p>
              </div>
              <div>
                <p>Will I be notified when the gift card is used?</p>
                <p>Body</p>
              </div>
              <div>
                <p>How should I choose who to give my gift card too?</p>
                <p>Body</p>
              </div>
              <div>
                <p>Where can the gift cards be used?</p>
                <p>Body</p>
              </div>
              <div>
                <p>How do I cancel my order?</p>
                <p>Body</p>
              </div>
              <div>
                <p>Is it legal to give to panhandlers?</p>
                <p>Body</p>
              </div>
            </div>
        	</div>

          <div className="StartButton">
            <a href="">Start Change</a>
          </div>
        
        </div>
    );
  }
}

FAQ.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

FAQ.displayName = 'FAQ';

export default FAQ;
