var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
const uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'clean up place'
        },
        {
          id: uuid(),
          text: 'something something'
        },
        {
          id: uuid(),
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
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
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
