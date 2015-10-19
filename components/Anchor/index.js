/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Anchor extends React.Component {
  render(): ?ReactElement {

    var {href, children, type, ...props} = this.props,
        className = `Anchor is-${type}`;

    return (
      <a {...props} href={href} className={className}>
        {children}
      </a>
    );
  }
}

Anchor.propTypes = {
  type: PropTypes.oneOf(['black', 'grey', 'pink', 'white']),
  children: PropTypes.any.isRequired,
};

Anchor.defaultProps = {
  type: 'black',
};

export default Anchor;
