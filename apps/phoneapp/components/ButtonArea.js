/** @jsx React.DOM */

var React = require('react');

var ButtonArea = React.createClass({
    dial: function() {
    	this.props.handleDial();
    },
    manage: function() {
    	this.props.handleManage();
    },
    render: function() {
        return (
            <div className="btn-group">
                <button className="btn btn-primary" onClick={this.dial}>Dial a friend</button>
                <button className="btn btn-info" onClick={this.manage}>Friend List</button>
            </div>
        );
    }
});

module.exports = ButtonArea;
