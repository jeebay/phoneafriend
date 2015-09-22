/** @jsx React.DOM */

// Dependencies
var React = require('react');
var HomeView = require('./HomeView.js');
var FriendsList = require('./FriendsList.js');
var Login = require('./Login');
var Radium = require('radium');

// Main container for the various application views
var PhoneApp = React.createClass({
    getInitialState: function () {
        return {
            currentView: "manageFriends",
            availability: 0
        };
    },
    onSelectorChange: function (availability) {
        this.state.availability = availability
    },
    onDialSubmit: function () {
        console.log("dial a friend!");
    },
    onManageSubmit: function () {
        this.setState({
            currentView: "manageFriends"
        });
    },
    onLoginSubmit: function () {
        // user is currently hardcoded for demo purposes. Must change.
        this.setState({
            currentView: "homeView"
        });
    },
    render: function () {
        var partial;
        // HARDCODED USER PLEASE CHANGE
        var user = {_id:"560083bd30a9bf36c497171c", name:"brian", phone:"5555555555", email:"test@test.com"};
        if (this.state.currentView == "manageFriends") {
            partial = <FriendsList url="api/v1/" currentUser={user} />;
        } else if (this.state.currentView == "login") {
            partial = <Login onLoginSubmit={this.onLoginSubmit} />
        } else if (this.state.currentView == "homeView") {
            partial = <HomeView onManageSubmit={this.onManageSubmit} onDialSubmit={this.onDialSubmit} onSelectorChange={this.onSelectorChange}/>
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