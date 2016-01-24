var React = require('react');

var FancyButton = React.createClass({
    render: function() {
        return <button onClick={this.props.onClick}>
            <i className={"fa " + this.props.icon}></i>
            <span>{this.props.text}</span>
        </button>
    }
});

module.exports =  React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({ counter: this.state.counter+1 });
    },

    render: function() {
        return <div>
            <div>{this.state.counter}</div>
            <button onClick={this.increment}>Increment!</button>
        </div>;
    }
});