import React from 'react';
import {Resolver} from 'react-resolver';

class About extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="About">
        About
      </div>
    );
  }
}

About.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

About.displayName = 'About';

export default About;
