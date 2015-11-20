/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class HeroSlider extends React.Component {

  renderContents(items) {
    return items.map(item => (
      <div className="HeroSliderItem">
        <div className="HeroSliderItem-ImageWrapper">
          <img src={`/public/images/${item.image}`} className="HeroSliderItem-Image"></img>
        </div>
        <div className="HeroSliderItem-Title">{item.title}</div>
        <div className="HeroSliderItem-Content">{item.content}</div>
      </div>
    ));
  }

  render(): ?ReactElement {

    let items = [
      {
        image: 'Card.png',
        title: 'We send you cards',
        content: 'You receive gift cards in the mail along with instructions for handing out.'
      },
      {
        image: 'GiveIcon.png',
        title: 'You give cards',
        content: 'You distribute gift cards to people in need instead of cash.'
      },
      {
        image: 'ForkKnife.png',
        title: 'Cards are redeemed',
        content: '100% of your card is used to buy food and neccessities. We notify you when the card is used.'
      }
    ];

    return (
      <div className="HeroSlider">
        {this.renderContents(items)}
      </div>
    );
  }
}

HeroSlider.propTypes = {
};

HeroSlider.defaultProps = {
};

export default HeroSlider;
