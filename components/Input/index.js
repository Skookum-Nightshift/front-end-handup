/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputKeyDown(e) {
    var node = this.refs.inputField.getDOMNode();
    var value = node.value;

    var re = new RegExp(' ', 'g');
    value = value.replace(re, '').replace('/', '');

    if (e.key === 'Backspace' && node.selectionStart === 4) {
      value = value.substring(0, value.length - 1);
    }

    if (isNaN(value)) {
      value = value.substring(0, value.length - 1);
    }

    if (value.length === 2) {
      value = value[0]+value[1]+' / ';
    } else if (value.length === 3) {
      value = value[0]+value[1]+' / '+value[2];
    } else if (value.length >= 4) {
      value = value[0]+value[1]+' / '+value[2]+value[3];
    }

    node.value = value;
  }

  onInputChange() {
    var value = this.refs.inputField.getDOMNode().value;
    if(this.props.type === 'monthYear') {
      value = value.replace('_', '');
      if (value.length === 3) {
        value = value.replace('/', '');
      }
    }

    this.props.onInputChange(this.props.name, value);
  }

  render(): ?ReactElement {
    let {className, isRequired, onChange, onKeyUp, ref, type, name, onInputChange, ...props} = this.props;

    let requiredClass = isRequired ? 'Input--required' : '';

    let inputClassName = 'Input ' + requiredClass + '' + (className || '');

    if (type === 'monthYear') {
      return (
        <input type="text" ref="inputField" className={inputClassName}
          onChange={this.onInputChange} onKeyUp={this.onInputKeyDown} {...props} />
      );
    }

    return (
      <input type={type} ref="inputField" className={inputClassName}
        onChange={this.onInputChange} {...props} />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

Input.defaultPropTypes = {
  type: 'text'
};

export default Input;
