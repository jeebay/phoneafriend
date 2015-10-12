var React = require('react');
var Radium = require('radium');

var Navbar = React.createClass({
    handleNewUser: function () {
        if (this.props.isAuthenticated) {
            this.props.newUser();    
        }        
    },
    handleSession: function () {
        if (this.props.isAuthenticated) {
            this.handleLogout();
        } else {
            this.handleLogin()
        }
    },
    handleLogin: function () {
        this.props.onLogin();
    },
    handleLogout: function () {
        this.props.onLogout();
    },
    render: function () {
        return (
            <nav className="navbar navbar-static-top navbar-default">
                <div className="container">
                    <div className="navbar-inner">
                        <a className="navbar-brand" href="#">Phone-A-Friend</a>
                        <ul className="nav navbar-nav">
                            <li><a className="" href="#" onClick={this.handleNewUser}>New User</a></li>
                            <li><a className="" href="#" onClick={this.handleSession}>{this.props.isAuthenticated ? "Log Out" : "Log In"}</a></li>
                        </ul>
                    </div>
                </div>
            </nav> 
        );
    }
});

module.exports = Radium(Navbar);