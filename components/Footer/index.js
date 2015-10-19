/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Footer extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `Footer is-${type}`;

    return (
      <div>
        Terms of Service | Privacy Policy
        <br />
        Copyright 2015, CHANGE App, All Rights Reserved
      </div>
    );
  }
}

Footer.propTypes = {
  type: PropTypes.oneOf(['black', 'grey', 'pink', 'white']),
  children: PropTypes.any.isRequired,
};

Footer.defaultProps = {
  type: 'black',
};

export default Footer;
