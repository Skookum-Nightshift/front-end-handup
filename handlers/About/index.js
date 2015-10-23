import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class About extends React.Component {

  render(): ?ReactElement {
    return (
      <div>

      	<Header />

      	<div>
      		About Body
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
