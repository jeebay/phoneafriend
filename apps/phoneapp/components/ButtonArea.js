/** @jsx React.DOM */

var React = require('react');

var ButtonArea = React.createClass({
    dial: function() {
    	this.props.onDialSubmit();
    },
    manage: function() {
    	this.props.onManageSubmit();
    },
    render: function() {
        return (
            <div className="btn-group">
                <button className="btn btn-primary" onClick={this.dial}>Dial a friend</button>
                <button className="btn btn-warning" onClick={this.manage}>Friend List</button>
            </div>
        );
    }
});

module.exports = ButtonArea;

