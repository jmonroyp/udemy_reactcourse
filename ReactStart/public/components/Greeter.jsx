var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is a default message'
        };
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    handleNewUpdate: function(updates) {
        this.setState(updates);
    },
    render: function() {
        var name = this.state.name;
        var mess = this.state.message;
        return (
            <div>
			<GreeterMessage name={name} message={mess} />
			<GreeterForm onNewUpdate={this.handleNewUpdate} />
			</div>
        );
    }
});

module.exports = Greeter;