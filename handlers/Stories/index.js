import React from 'react';
import {Resolver} from 'react-resolver';

class Stories extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Stories">
        Stories
      </div>
    );
  }
}

Stories.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Stories.displayName = 'Stories';

export default Stories;
