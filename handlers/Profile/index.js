require('../styles.css');
require('./styles.css');

import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';

import Button from 'Button';

class Profile extends React.Component {

  constructor(){
    super();
    this.state = {
      user: UserStore.getState().user,
      users: []
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    console.log("State: "+this.state.user);
    if (!this.state.user) {
      console.log("redirect");
      this.context.router.transitionTo('login');
    }

    UserStore.listen((state) => {
      this.setState({ user: state.user });
    });
  }
  
  handleLogout(){
    UserActions.deleteUser();
    this.context.router.transitionTo('home');
  }

  render(): ?ReactElement {
    return (
      
      <div className="Container">
        
      	<Header />
        <div className="AppBody">
        	<div className="Profile">
        		Profile Body
            <br/>
            <Button className="button" onClick={this.handleLogout} type="pink">Logout</Button>
        	</div>
        </div>
		<Footer />

      </div>
    );
  }
}

Profile.contextTypes = {
  router: React.PropTypes.func.isRequired
};

Profile.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Profile.displayName = 'Profile';

//export default Profile;
export default Resolver.createContainer(Profile, {
  resolve: { },
});
