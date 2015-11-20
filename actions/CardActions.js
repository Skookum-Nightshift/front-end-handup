var alt = require('../alt');

class CardActions {
  updateCard(card) {
    this.dispatch(card);
  }

  deleteCard() {
    this.dispatch();
  }
}

module.exports = alt.createActions(CardActions);
