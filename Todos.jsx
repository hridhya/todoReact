/**@jsx React.DOM*/

var React = require('react');
var ReactDOM = require('react-dom');

var ListItemWrapper = React.createClass({
    render: function() {
        return <li>{this.props.data}</li>;
    }
});
var TodoList = React.createClass({
    render: function() {
        return (
            <ul>
                {this.props.items.map(function(result) {
                    return <ListItemWrapper key={result.id} data={result}/>;
                })}
            </ul>
        );
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {items: [], text: ''};
    },

    onChange: function(e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },

    //Add delete feature
    removeTodo: function(index) {
        this.state.items.splice(index, 1);
        this.setState({items: this.state.items});
    },

    render: function() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

ReactDOM.render(<TodoApp />, document.getElementById('main'));