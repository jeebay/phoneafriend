/** @jsx React.DOM */

var React = require('react');
var AvailabilitySelector = require('./AvailabilitySelector.js');
var ButtonArea = require('./ButtonArea.js');

var HomeView = React.createClass({
	onSelectorChange: function (availability) {
		this.props.onSelectorChange(availability);
	},
	onDialSubmit: function () {
		this.props.onDialSubmit();
	},
	onManageSubmit: function () {
		this.props.onManageSubmit();
	},
	render: function () {
		return (
			<div>
				<AvailabilitySelector onSelectorChange={this.onSelectorChange} />
				<br />
				<ButtonArea onDialSubmit={this.onDialSubmit} onManageSubmit={this.onManageSubmit}/>
			</div>
		);
	}
});

module.exports = HomeView;