import React from 'react';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';

class LoggedInHandler extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.state.user = UserStore.getState().user;
        this.state.redirectTo = 'login';

        this.watchUser = this.watchUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.handleNoUser = this.handleNoUser.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.stopWatchingUser = this.stopWatchingUser.bind(this);
    }

    componentDidMount() {
        this.watchUser();
        this.handleNoUser();
    }

    componentWillUnmount() {
        this.stopWatchingUser();
    }

    onUserChange(state) {
        this.setState({ user: state.user });
    }

    watchUser() {
        UserStore.listen(this.onUserChange);
    }

    stopWatchingUser() {
        UserStore.unlisten(this.onUserChange);
    }

    handleNoUser() {
        var {router} = this.context,
            {user, redirectTo} = this.state;

        if (redirectTo === 'none') { return; }

        if (!user) {
            router.transitionTo(redirectTo);
        }
    }

    logoutUser() {
        UserActions.deleteUser();
    }

    updateUser(user) {
        UserActions.updateUser(user);
    }

}

LoggedInHandler.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

export default LoggedInHandler;