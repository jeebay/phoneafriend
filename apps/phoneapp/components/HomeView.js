/** @jsx React.DOM */

var React = require('react');
var AvailabilitySelector = require('./AvailabilitySelector.js');
var ButtonArea = require('./ButtonArea.js');

var HomeView = React.createClass({
	render: function () {
		return (
			<div>
				<AvailabilitySelector />
				<ButtonArea />
			</div>
		);
	}
});

module.exports = HomeView;