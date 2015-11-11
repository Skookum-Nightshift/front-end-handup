/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Questions extends React.Component {

  constructor(){
    super();

    this.state = {
      isOpen: false,
    };
  
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer() {
    this.setState({isOpen: !this.state.isOpen});

    this.props.toggleAnswer(value)
  }

  render(): ?ReactElement {
    var openClass = this.state.isOpen ? " isActive" : "";
    var dotState = !this.state.isOpen ? "-right" : "-down";
    return (
      <div className="Questions">
        <div>
	        <p className={"Questions-Question" + openClass} onClick={this.toggleAnswer}><i className={"fa fa-arrow"+dotState}></i>&nbsp;&nbsp;&nbsp;{this.props.question.question}</p>
	        <p className="Questions-Answer">{this.props.question.answer}</p>
      </div>
      </div>
    );
  }
}

Questions.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Questions;
