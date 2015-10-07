var React = require('react');
var PhoneApp = require('./components/PhoneApp.js');

var mountNode = document.getElementById("react-target");

React.render(<PhoneApp />, mountNode);