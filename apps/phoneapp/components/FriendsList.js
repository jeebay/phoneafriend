/** @jsx React.DOM */

var React = require('react');

var FriendList = React.createClass({
	getInitialState: function () {
		return {friends: []};
	},
	componentDidMount: function () {
		this.getFriendsFromServer({user: this.props.currentUser});
	},
	getFriendsFromServer: function (user) {
		$.ajax({
			url: this.props.url + user.id,
			dataType: 'json',
			data: user,
			success: function (data) {
				this.setState({friends: data})
			}.bind(this),
			error: function (xhr, status, err) {
				console.log(this.props.url, status, err.toString());
				alert("Unable to load friends", this.props.url, status, err.toString());
			}
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
		var url = this.props.url + "friends/" + friend.id;
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
		var friends = this.state.friends;
		friends.push(friend);

		this.setState({
			friends: friends
		});
	},
	render: function () {
		var friends = this.state.friends.map(function(friend, index) {
			return (
				<Friend 
				name={friend.name}
				email={friend.email}
				phone={friend.phoneNumber}
				removeFriend={this.removeFriend(friend, index)}
				editFriend={this.editFriend(friend, index)}
				/>
			);
		}.bind(this));


		return (
			<div>
				<ul>
					{friends}
				</ul>
			</div>
		);
	}
});

module.exports = FriendList;