var alt = require('../alt');
var CardActions = require('../actions/CardActions');

import cookie from 'react-cookie';

class CardStore {
  constructor() {
    this.card = cookie.load('card');

    this.bindListeners({
      handleUpdateCard: CardActions.UPDATE_CARD,
      handleDeleteCard: CardActions.DELETE_CARD,
    });
  }

  handleUpdateCard(card) {
    this.card = card;
    cookie.save('card', card);
  }

  handleDeleteCard() {
    this.card = null;
    cookie.remove('card');
  }
}

module.exports = alt.createStore(CardStore, 'CardStore');
