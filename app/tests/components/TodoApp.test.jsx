const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp Component', () => {
  it('should render', () => {
    expect(TodoApp).toExist();
  });

  it('should add a new todo', () => {
    var todoText = 'walk the dog';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});

    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });

});
