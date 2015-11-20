/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Footer extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `Footer is-${type}`;

    return (
      <div className="Footer">
        
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
