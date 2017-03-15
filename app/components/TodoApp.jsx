var React = require('react');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import Search from 'Search';

const uuid = require('node-uuid');
const moment = require('moment');
const TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoAPI.setTodos(this.state.todos);
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
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  render: function () {
    var {todos, showCompleted, searchText} = this.state;

    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h3 className="page-title">Todo App</h3>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <Search onSearch={this.handleSearch}/>
              <TodoList/>
              <AddTodo addTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = TodoApp;
