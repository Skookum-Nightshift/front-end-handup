/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Header extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `Header is-${type}`;

    return (
      <div>
        <ul>
          <li>
            <img src="" alt="one"/>
          </li>
          <li>
            <img src="" alt="two"/>
          </li>
          <li>
            <img src="" alt="three"/>
          </li>
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  type: PropTypes.oneOf(['black', 'grey', 'pink', 'white']),
  children: PropTypes.any.isRequired,
};

Header.defaultProps = {
  type: 'black',
};

export default Header;
