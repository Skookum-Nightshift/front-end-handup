require('./styles.css');
require('../styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Questions from 'Questions';


var questionsList = [
  {question: "What happens if I lose my gift card?", answer: "asdfasdf"},
  {question: "What happens if my gift card is never redeemed?", answer: "asdfasdf"},
  {question: "What happens if someone tries to buy liquor or tobacco products with the gift card?", answer: "asdfasdf"},
  {question: "Will I be notified when the gift card is used?", answer: "asdfasdf"},
  {question: "How should I choose who to give my gift card too?", answer: "asdfasdf"},
  {question: "Where can the gift cards be used?", answer: "asdfasdf"},
  {question: "How do I cancel my order?", answer: "asdfasdf"},
  {question: "Is it legal to give to panhandlers?", answer: "asdfasdf"},
];

class FAQ extends React.Component {

  render(): ?ReactElement {
    return (
      <div>
      	<div className="FAQ">
          <p className="PageTitle">FAQ</p>
          
          <div className="Summary">
            <p>We provide gift cards that are only redeemable at stores that do not sell liquor or tobacco products. Individuals or larger organizations can select the amount and quantity of cards to give to their neighbors in need without the worry of how their investment will be spent. Don&lsquo;t carry cash? No problem. By keeping a couple of $5 gift cards in your wallet you&lsquo;ll be fully prepared to brighten someone&lsquo;s day! It takes less than 5 minutes to get started--are you ready to &lsquo;change&lsquo; your community?</p>
          </div>

          <div className="QNA">
            {questionsList.map( (question) => (<Questions question={question} toggleAnswer={this.toggleAnswer}/> ))}
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
