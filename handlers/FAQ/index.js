require('./styles.css');
require('../styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class FAQ extends React.Component {

  render(): ?ReactElement {
    return (
    	
      <div className="Container">
      	
        <Header />
        <div className="AppBody">
        	<div className="FAQ">
        		FAQ Body
        	</div>
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
