/** @jsx React.DOM */

var React = require('react');
var PhoneApp = require('./components/phone_app/PhoneApp.js');

var mountNode = document.getElementById("react-target");

React.render(<PhoneApp />, mountNode);