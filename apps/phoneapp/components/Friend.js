// Dependencies
var React = require('react');
var Radium = require('radium');

var Friend = React.createClass({
	getInitialState: function () {
		return {
			name: this.props.name,
			email: this.props.email,
			phone: this.props.phone,
			editing: this.props.editing,
			ENTER: 13,
			ESC: 27
		}
	},
	render: function () {
		return (
			<div style={[styles.liBase, this.props.bgColor && styles.bgColor]}>
				<span style={this.props.editing ? styles.editing : styles.base}> 
					<p>{this.state.name} | {this.state.email} | {this.state.phone}</p>
					<br />
					<button style={this.props.editing && styles.editing} className="btn btn-danger" onClick={this.removeFriend}>Delete</button>
					<button style={this.props.editing && styles.editing} className="btn btn-warning" onClick={this.editFriend}>Edit</button>
				</span>
				<span style={!this.props.editing ? styles.editing : styles.edit}>
					<input ref="editName" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.name} />
					<input ref="editEmail" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.email} />
					<input ref="editPhone" type="text" onChange={this.handleChange} onKeyDown={this.handleKeyDown} value={this.state.phone} />
					<button onClick={this.submitChange}>Submit</button>
				</span>
			</div>
		);
	},
	removeFriend: function () {
		var key = this.props.key;
		this.props.removeFriend(key);
	},
	editFriend: function () {
		var key = this.props.key;
		this.props.editFriend(key, function() {
			this.setState({editing: true})
		}.bind(this));
	},
	submitChange: function () {
		var friend = {
			friendName: this.state.name.trim(),
			friendEmail: this.state.email.trim(),
			friendPhone: this.state.phone.trim()
		};
		this.props.saveFriend(key, friend);
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