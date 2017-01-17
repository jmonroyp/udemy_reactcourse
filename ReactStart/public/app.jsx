var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var name = 'Daniel';

ReactDOM.render(
    <Greeter name={name} />,
    document.getElementById('app')
);
