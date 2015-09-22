/** @jsx React.DOM */

// Dependencies
var React = require('react');
var HomeView = require('./HomeView.js');
var FriendsList = require('./FriendsList.js');
var Radium = require('radium');

// Main container for the various application views
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
        var user = {id:"560083bd30a9bf36c497171c", name:"brian", phone:"5555555555", email:"test@test.com"};
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