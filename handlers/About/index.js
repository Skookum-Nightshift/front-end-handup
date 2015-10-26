require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class About extends React.Component {

  render(): ?ReactElement {
    return (
      
      <div className="Container">

      	<Header />
        <div className="AppBody">
        	<div className="About">
        		About Body
        	</div>
        </div>
		    <Footer />
        
    </div>
    );
  }
}

About.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

About.displayName = 'About';

export default About;
