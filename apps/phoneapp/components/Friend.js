// Dependencies
var React = require('react');
var Radium = require('radium');

var Friend = React.createClass({
	render: function () {
		var name = this.props.name
		var email = this.props.email
		var phone = this.props.phone
		return (
			<div style={styles.liBase}>
				<span style={[styles.base, this.props.bgColor && styles.bgColor]} key={this.state.uniq} >{name} | {email} | {phone}</span>
				<br />
				<button className="btn btn-primary" onClick={this.removeFriend}>Delete</button>
				<button className="btn btn-" onClick={this.editFriend}>Edit</button>
				<br />	
			</div>
		);
	},
	removeFriend: function () {
		var uniq = this.props.uniq;
		this.props.removeFriend(uniq);
	},
	editFriend: function () {
		var uniq = this.props.uniq;
		this.props.editFriend(uniq);
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
	}
};

module.exports = Radium(Friend);