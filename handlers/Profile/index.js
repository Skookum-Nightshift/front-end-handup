require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

class Profile extends React.Component {

  render(): ?ReactElement {
    return (
      
      <div className="Container">
        
      	<Header />
        <div className="AppBody">
        	<div className="Profile">
        		Profile Body
        	</div>
        </div>
		<Footer />

      </div>
    );
  }
}

Profile.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Profile.displayName = 'Profile';

export default Profile;
