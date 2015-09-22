/** @jsx React.DOM */

var React = require('react');
var Radium = require('radium');
var Friend = require('./Friend.js');

var FriendList = React.createClass({
	getInitialState: function () {
		return {friends: []};
	},
	componentDidMount: function () {
		this.getFriendsFromServer({user: this.props.currentUser});
	},
	getFriendsFromServer: function (user) {
		$.ajax({
			method: 'GET',
			url: this.props.url + 'friends?user=' + this.props.currentUser._id,
			dataType: 'json',
			success: function (data) {
				this.setState({friends: data})
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(this.props.url, status, err.toString());
				alert("Unable to load friends", this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	removeFriend: function (friend, index) {
		// remove friend from this.state.friends
		var friends = this.state.friends;
		friends.splice(index, 1);
		this.setState({
			friends: friends
		});

		// update datastore 
		var url = this.props.url + "friends/" + friend._id;
		$.ajax({
			method: "DELETE",
			url: url,
			success: function (data) {
				console.log("friend removed:", data);
			},
			// on error, re-insert friend into this.state.friends
			error: function (xhr, status, err) {
				alert("friend removal not successful", url, status, err.toString());
				friends.splice(index, 0, friend);
				this.setState({
					friends: friends
				});
			}
		});
	},
	editFriend: function (friend, index) {

	},
	addFriend: function (e) {
		e.preventDefault();
		var friend = {
			user: this.props.currentUser._id,
			friendPhone: React.findDOMNode(this.refs.friendPhone).value,
			friendName: React.findDOMNode(this.refs.friendName).value,
			friendEmail: React.findDOMNode(this.refs.friendEmail).value,
		};

		if (!(friend.friendPhone && friend.friendEmail && friend.friendName)) {
			alert("Please enter all of the fields")
			return;
		}

		var friends = this.state.friends;
		friends.push(friend);

		this.setState({
			friends: friends
		});

		var url = this.props.url + "friends";

		$.ajax({
			method: "POST",
			url: url,
			data: friend
		})
	},
	goBack: function () {
		this.props.goBack();
	},
	render: function () {
		var friends = this.state.friends.map(function(friend, index) {
			return (
				<Friend 
				name={friend.friendName}
				email={friend.friendEmail}
				phone={friend.friendPhone}
				uniq={friend._id}
				removeFriend={this.removeFriend}
				editFriend={this.editFriend}
				bgColor={index % 2}
				/>
			);
		}.bind(this));


		return (
			<div>
				<h2 style={styles.h2base}> {this.props.currentUser.name}'s friends</h2>
				<button className="btn" style={styles.button} onClick={this.goBack}>X</button>
				<hr />
				<ul>
					{friends}
				</ul>
				<form className="form-group" onSubmit={this.addFriend}>
					<h3>Add a friend</h3>
					<input className="form-control" type="text" ref="friendName" placeholder="friend name" />
					<input className="form-control" type="text" ref="friendPhone" placeholder="phone number" />
					<input className="form-control" type="text" ref="friendEmail" placeholder="email address" />
					<button className="btn btn-default" type="submit">Add Friend</button>
				</form>
			</div>
		);
	}
});

var styles = {
	h2base: {
		textAlign: "center",
		display: "inline-block",
	},
	button: {
		displat: "inline-block",
		float: "right"
	}
};

module.exports = Radium(FriendList);