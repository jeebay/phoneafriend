var React = require('react');
var PhoneApp = React.createFactory(require('../components/PhoneApp.js'));
var Navbar = React.createFactory(require('../components/Navbar.js'));

module.exports = function(app) {
    
    app.get('/', function (req, res, next) {
        var navbarHTML = React.renderToString(Navbar());
        var appHTML = React.renderToString(PhoneApp());

        res.render('index.html.ejs', {navbar: navbarHTML, renderedReactNodes: appHTML});
    });

};
