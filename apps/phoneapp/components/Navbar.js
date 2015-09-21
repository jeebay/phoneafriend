/** @jsx React.DOM */

var React = require('react');
var Radium = require('radium');

var Navbar = React.createClass({
    
    render: function () {
        

        return (
            <nav className="navbar navbar-fixed-top navbar-default">
                <div className="container-fluid">
                    <div className="navbar-inner">
                        <a className="navbar-brand" href="#">Phone-A-Friend</a>
                    </div>
                </div>
            </nav> 
        );
    }
});

module.exports = Radium(Navbar);