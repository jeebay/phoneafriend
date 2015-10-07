// Dependencies
var React = require('react');
var HomeView = require('./HomeView.js');
var FriendsList = require('./FriendsList.js');
var Login = require('./Login');
var CountDownTimer = require('./CountDownTimer.js');
var Radium = require('radium');

// Main container for the various application views
var PhoneApp = React.createClass({
    getInitialState: function () {
        return {
            currentView: "manageFriends",
            availability: 0,
            timerVisibility: false,
            timerComplete: false
        };
    },
    onSelectorChange: function (availability) {
        this.setState({
            availability: availability,
            timerVisibility: true,
            timerComplete: false
        });
    },
    onTimerComplete: function () {
        this.setState({
            timerVisibility: false,
            timerComplete: true
        });
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
            partial = <FriendsList url="api/v1/" currentUser={user} goBack={this.onLoginSubmit}/>;
        } else if (this.state.currentView == "login") {
            partial = <Login onLoginSubmit={this.onLoginSubmit} />
        } else if (this.state.currentView == "homeView") {
            partial = <HomeView onManageSubmit={this.onManageSubmit} onDialSubmit={this.onDialSubmit} onSelectorChange={this.onSelectorChange}/>
        }

        var timer;
        if (this.state.timerVisibility) {
            timer = <CountDownTimer initialTimeRemaining={this.state.availability * 60000} completeCallback={this.onTimerComplete}/>
        }

        return (
            <div style={[styles.container, this.state.timerComplete && styles.complete]}>
                {partial}
                {timer}
            </div> 
        );
    }
});

var styles = {
    container: {
        color: "#224",
        width: "100%",
        paddingLeft: "5px",
        paddingRight: "5px",
        paddingBottom: "10px"
    },
    complete: {
        backgroundColor: "#fee"
    }
}

module.exports = Radium(PhoneApp);