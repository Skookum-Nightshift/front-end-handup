/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class TitlePageBase extends React.Component {

  render(): ?ReactElement {

    let {children, title} = this.props;

    return (
      <div className="Container">
        <div className="AppTitle">{title}</div>
        <div className="AppBody">
          <div className="AppBody-Center">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

TitlePageBase.propTypes = {
};

TitlePageBase.defaultProps = {
};

export default TitlePageBase;
