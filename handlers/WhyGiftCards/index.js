
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class WhyGiftCards extends React.Component {

  render(): ?ReactElement {
    return (
    	<div>

      	<Header />

      	<div className="WhyGiftCards">
      		WhyGiftCards Body
      	</div>

		  <Footer />
		
      </div>
    );
  }
}

WhyGiftCards.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

WhyGiftCards.displayName = 'WhyGiftCards';

export default WhyGiftCards;
