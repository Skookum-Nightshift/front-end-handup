import React from 'react';
import {Resolver} from 'react-resolver';

class FAQ extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="FAQ">
        FAQ
      </div>
    );
  }
}

FAQ.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

FAQ.displayName = 'FAQ';

export default FAQ;
