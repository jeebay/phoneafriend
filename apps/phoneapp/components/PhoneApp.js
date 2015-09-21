/** @jsx React.DOM */

var React = require('react');
var HomeView = require('./HomeView.js');
var FriendsList = require('./FriendsList.js');
var Radium = require('radium');

// var DialButton = React.createFactory(require('./DialButton.jsx'));
// var ManageFriendsButton = React.createFactory(require('./ManageFriendsButton.jsx'));

var PhoneApp = React.createClass({
    getInitialState: function () {
        return {
            currentView: "home"
        };
    },
    handleDial: function () {

    },
    handleManage: function () {

    },
    render: function () {
        var partial;
        var user = {id:"0", name:"brian", phone:"555-555-5555", email:"test@example.com"};
        if (this.state.currentView == "manageFriends") {
            partial = <FriendsList url="api/vi/users/" currentUser={user} />;
        } else {
            partial = <HomeView />
        }

        return (
            <div style={styles.container}>
                {partial}
            </div> 
        );
    }
});

var styles = {
    container: {
        color: "#224",
        border: "1px solid grey",
        ':hover': {
            backgroundColor: '#efe'
        },
        padding: '5px',
        width: '480px'
    }
}

module.exports = Radium(PhoneApp);