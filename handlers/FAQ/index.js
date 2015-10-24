require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class FAQ extends React.Component {

  render(): ?ReactElement {
    return (
    	<div>
      	<Header />

      	<div className="FAQ">
      		FAQ Body
      	</div>

		    <Footer />
		</div>
    );
  }
}

FAQ.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

FAQ.displayName = 'FAQ';

export default FAQ;
