require('../styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import Header from 'Header';
import Footer from 'Footer';
import Input from 'Input';
import Button from 'Button';
import {apiPost} from 'requestLib';
import LoggedInHandler from 'LoggedInHandler';

class Profile extends LoggedInHandler  {


  constructor(){
    super();
    
    this.state.editMode = false;

    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateUserState = this.updateUserState.bind(this);
    this.updateUserInfo = this.updateUserInfo.bind(this);
  }

  componentDidMount() {

    console.log("CDM: "+this.state.user);

  }
  
  handleUpdate(){
    var {editMode} = this.state;
    if (editMode) {
      // SUBMIT
      this.setState({ editMode: false });
    } else {
      this.setState({ editMode: true });
    }

  };
  
  updateUserState(name, value){
    var {user} = this.state;
    user[name] = value;
    this.setState({ user });
  };


  updateUserInfo(){
    console.log(this.state.user);

    var userInfo = {
      user : {
        first_name : this.state.user.first_name,
        last_name : this.state.user.last_name,
        email : this.state.user.email,
        streetaddress : this.state.user.streetaddress,
        city : this.state.user.city,
        state : this.state.user.state,
        zip : this.state.user.zipcode
      }
    };

    console.log(userInfo);
    apiPost(
      "v1/users",//path
      userInfo,
      (data) => {
        console.log(data);
        this.updateUser(userInfo.user);
        //this.setState({editMode: false});
        this.context.router.transitionTo('profile');
      },
      (data) => {
        console.log(data);
      },
      {
        'Authorization': `Bearer ${this.state.user.auth_token}`
      }
    );

    //this.updateUser(state.user);
  };


  render(): ?ReactElement {

    if ( typeof window === 'undefined' ) { return <div></div>; }

    console.log(JSON.stringify(this.state.user));

    var user = this.state.user || {};

    var {first_name, last_name, email, streetaddress, city, state, zip} = this.state.user;

    console.log("Render: "+this.state.user);

    return (
      
      <div className="Container">
        
        
        <div className="AppBody">
          <p className="PageTitle">My CHANGE Account</p>
        	
          <div className="Profile">
        		<h3>Profile</h3>
              <div className="Personal">
                <div className="Name">
                  <label>FIRST NAME</label>
                  { !this.state.editMode ? first_name : <Input defaultValue={first_name} type="text" name="first_name" onInputChange={this.updateUserState} />}
                  <br/>
                  <label>LAST NAME</label>
                </div>
                  { !this.state.editMode ? last_name : <Input defaultValue={last_name} type="text" name="last_name" onInputChange={this.updateUserState} />}
                <div className="Login">
                  <label>EMAIL</label>
                  { !this.state.editMode ? email : <Input defaultValue={email} type="text" name="email" onInputChange={this.updateUserState}/>}
                  <br/>
                  <label>PASSWORD</label>
                  { !this.state.editMode ? '********' : <Input type="password" name="password" onInputChange={this.updateUserState}/>}
                  <br/>
                  <label>CONFIRM PASSWORD</label>
                  { !this.state.editMode ? '********' : <Input type="password" name="password_confirmation" onInputChange={this.updateUserState}/>}
                  { this.state.editMode ? <Button onClick={this.updateUserInfo} className="button">Save</Button> : <Button onClick={this.handleUpdate} className="button">Update User</Button>}
                </div>
                
            </div>
            <div className="Contact">
              <div>
                <div>
                  <h3>Payment Preferences</h3>
                  <div>Mastercard xxxx-3234 exp. date 12/31/15</div>
                  <div>Mastercard xxxx-3234 exp. date 12/31/15</div>
                  <div>Mastercard xxxx-3234 exp. date 12/31/15</div>
                </div>

                <div>
                  <h3>Notification Preferences</h3>
                  <div>Send me updates and news <Input type="checkbox"/></div>
                  <div>Notify me when card is used <Input type="checkbox"/></div>
                </div>
             </div>

              <div>
                <h3>Delivery Address</h3>
                <label>STREET ADDRESS</label>
                { !this.state.editMode ? streetaddress : <Input defaultValue={streetaddress} placeholder="Street Address" type="text" name="streetaddress" onInputChange={this.updateState}/>}
                <br/>
                <label>CITY</label>
                { !this.state.editMode ? city : <Input defaultValue={city} placeholder="City" type="text" name="city" onInputChange={this.updateState}/>}
                <br/>
                <label>STATE</label>
                { !this.state.editMode ? state : <Input defaultValue={state} placeholder="State" type="text" name="state" onInputChange={this.updateState}/>}
                <br/>
                <label>ZIP</label>
                { !this.state.editMode ? zip : <Input defaultValue={zip} placeholder="Zipcode" type="text" name="zipcode" onInputChange={this.updateState}/>}
              </div>
            </div>
            <Button className="button" onClick={this.handleUpdate} type="pink">Update</Button>
          </div>
        </div>

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
