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

    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });

  it('should toggle completeed to incomplete value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });


});
