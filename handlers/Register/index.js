import React from 'react';
import {Resolver} from 'react-resolver';

class Register extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Register">
        Register
      </div>
    );
  }
}

Register.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Register.displayName = 'Register';

export default Register;
