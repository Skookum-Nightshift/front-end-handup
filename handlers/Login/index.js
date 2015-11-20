require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Button from 'Button';
import Input from 'Input';
import {apiPost} from 'requestLib';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import TitlePageBase from 'TitlePageBase';
import BaseForm from 'BaseForm';

class Login extends React.Component {

  constructor(){
    super();

    this.state = {
      user: UserStore.getState().user,
      email: "",
      password: "",
      error: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount(){
    if (this.state.user) {
      console.log("redirect");
      this.context.router.transitionTo('profile');
    }

    UserStore.listen((state) => {
      this.setState({ user: state.user });
    });
  }

  handleSubmit(){
    console.log(
      "Email: "+this.state.email,
      "Pwd: "+this.state.password,
      "Error: "+this.state.error);

    apiPost(
      "v1/sign_in",//path
      this.state,
      (data) => {
        console.log(data);
        if (data.auth_token !== ''){
          console.log("Token "+data.auth_token);
          UserActions.updateUser(data);
          this.context.router.transitionTo('profile');
        } else {
          this.setState({ error: 'Cannot Auth' });
        }
      },
      (data) => {
        console.log(data);
      }
    );
  }

  updateState(name, value){
    var state = {};
    state[name] = value;
    this.setState(state);
  }

  render(): ?ReactElement {
    return (
      <TitlePageBase title="Login">
        <BaseForm submitText="Login" onSubmit={this.handleSubmit}>
          {this.state.error.length > 0 ? this.state.error : ''}
          <Input className="input" placeholder="email" value={this.state.email} onInputChange={this.updateState} type="email" name="email"/>
          <Input className="input" placeholder="password" value={this.state.password} onInputChange={this.updateState} type="password" name="password"/>
        </BaseForm>
      </TitlePageBase>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Login.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Login.displayName = 'Login';

//export default Login;
export default Resolver.createContainer(Login, {
  resolve: { },
});
