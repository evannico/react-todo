const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList Component', () => {
  it('should render', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Walk the dog'
      },
      {
        id: 2,
        text: 'clean up place'
      }
    ]
    var todoList = TestUtils.renderIntoDocument(<TodoList  todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  })
});
