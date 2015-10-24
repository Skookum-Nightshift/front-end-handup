
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class StoriesOfHope extends React.Component {

  render(): ?ReactElement {
    return (
      <div>

      	<Header />

      	<div className="StoriesOfHope">
      		StoriesOfHope Body
      	</div>

		    <Footer />
        
    </div>
    );
  }
}

StoriesOfHope.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

StoriesOfHope.displayName = 'StoriesOfHope';

export default StoriesOfHope;
