// Dependencies
var React = require('react');
var Radium = require('radium');

var Friend = React.createClass({
	getInitialState: function () {
		return {
			name: this.props.friend.friendName,
			email: this.props.friend.friendEmail,
			phone: this.props.friend.friendPhone,
			editing: this.props.editing,
			ENTER: 13,
			ESC: 27
		}
	},
	removeFriend: function () {
		var key = this.props.friend._id;
		this.props.removeFriend(key);
	},
	editFriend: function () {
		var key = this.props.friend._id;
		this.props.editFriend(key, function() {
			var node = React.findDOMNode(this.refs.editName);
			node.focus();
		}.bind(this))
	},
	submitChange: function () {
		var friend = {
			friendName: this.state.name.trim(),
			friendEmail: this.state.email.trim(),
			friendPhone: this.state.phone.trim()
		};
		this.props.saveFriend(this.props.friend._id, friend);
	},
	handleChange: function () {
		this.setState({
			name: React.findDOMNode(this.refs.editName).value,
			email: React.findDOMNode(this.refs.editEmail).value,
			phone: React.findDOMNode(this.refs.editPhone).value
		});
	},
	handleKeyDown: function (event) {
		if (event.which == this.state.ENTER) {
			this.submitChange();
		} else if (event.which == this.state.ESC) {
			this.props.onCancel();
		}
	},	
	render: function () {
		return (
			<div style={[styles.liBase, this.props.bgColor && styles.bgColor]}>
				<span style={this.props.editing ? styles.editing : styles.base}> 
					<p>{this.state.name} | {this.state.email} | {this.state.phone}</p>
					<br />
					<button className="btn btn-danger" onClick={this.removeFriend}>Delete</button>
					<button className="btn btn-warning" onClick={this.editFriend}>Edit</button>
				</span>
				<span style={!this.props.editing ? styles.editing : styles.edit}>
					<input ref="editName" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.name} />
					<input ref="editEmail" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.email} />
					<input ref="editPhone" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.phone} />
				</span>
			</div>
		);
	}
});

var styles = {
	base: {
		textAlign: "center"
	},
	bgColor: {
		background: "#EFE"
	},
	liBase: {
		listStyle: "none",
		fontSize: "1.5em",
		width: "100%"
	},
	editing: {
		display: "none"
	},
	edit: {
		display: "block"
	}
};

module.exports = Radium(Friend);