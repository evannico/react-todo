var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'clean up place'
        },
        {
          id: 3,
          text: 'something something'
        },
        {
          id: 4,
          text: 'something else'
        }
      ]
    }
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <Search onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo addTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
