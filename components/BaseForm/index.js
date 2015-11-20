/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class BaseForm extends React.Component {

  render(): ?ReactElement {

    let {children, onSubmit, submitText, style, disabled, ...props} = this.props;

    return (
      <div className="BaseForm" style={style}>
        <div className="BaseForm-Body">
          {children}
        </div>
        <div className={'BaseForm-Submit' + (disabled ? ' is_disabled' : '')} onClick={onSubmit}>
          {submitText}
        </div>
      </div>
    );
  }
}

BaseForm.propTypes = {
};

BaseForm.defaultProps = {
};

export default BaseForm;
