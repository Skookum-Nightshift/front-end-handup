require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Anchor from 'Anchor';
import Header from 'Header';
import Footer from 'Footer';
import HeroSlider from 'HeroSlider';

class Home extends React.Component {

 //Render piece, HTML goes here
  render(): ?ReactElement {
    return (

      <div className="Container">

        <div className="AppBody">
      	   <HeroSlider />
        </div>

      </div>

    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
