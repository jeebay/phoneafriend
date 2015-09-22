/** @jsx React.DOM */

// Dependencies
var React = require('react');

// Login view
var Login = React.createClass({
	handleSubmit: function (e) {
		e.preventDefault();
		var username = React.findDOMNode(this.refs.usernameInput).value;
		var password = React.findDOMNode(this.refs.passwordInput).value;
		
		if (!username || !password) {
			alert('Please submit a username and password');
			return;
		}

		this.props.onLoginSubmit({username: username, password: password});
		React.findDOMNode(this.refs.usernameInput).value = '';
		React.findDOMNode(this.refs.passwordInput).value = '';
		return;
	},
	render: function () {
		return (
			<form className="form-group" onSubmit={this.handleSubmit}>
				<label htmlFor="username">username</label>
				<input type="text" ref="usernameInput" className="form-control" placeholder="username" id="username"/>
				
				<br />
				
				<label htmlFor="password">password</label>
				<input type="password"
				ref="passwordInput"
				className="form-control"
				placeholder="password"
				id="password"/>
				<br />
				<button className="btn btn-default">Login</button>
			</form>
		);
	}
});

module.exports = Login;