var React = require('react');

var AvailabilitySelector = React.createClass({
    getInitialState: function () {
        return {availability: 10};
    },
    handleChange: function () {
        var availability = React.findDOMNode(this.refs.timeSelector).value;
        this.props.onSelectorChange(availability);
    },
    render: function () {
        return (
            <div>
                <label htmlFor="available">How long are you available?</label>
                <div className="input-group">
                    <input type="number" 
                    id="available"
                    ref="timeSelector"
                    className="form-control" 
                    min="0" max="60"
                    onChange={this.handleChange} />
                    <div className="input-group-addon">minutes</div>
                </div>
            </div>
        );
    }
});

module.exports = AvailabilitySelector;