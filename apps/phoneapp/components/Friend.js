/** @jsx React.DOM */

// Dependencies
var React = require('react');
var Radium = require('radium');

var Friend = React.createClass({
	render: function () {
		var name = this.props.name
		var email = this.props.email
		var phone = this.props.phone
		return (
			<li style={styles.liBase}>
				<span style={[styles.base, this.props.bgColor && styles.bgColor]} key={this.props.uniq} >{name} | {email} | {phone}</span>
			</li>
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
	}
};

module.exports = Radium(Friend);