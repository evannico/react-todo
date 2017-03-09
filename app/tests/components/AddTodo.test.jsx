const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should render', () => {
    expect(AddTodo).toExist();
  });

  it('should call handleAddTodo if valid todo entered', () => {
    var spy = expect.createSpy();

    var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = 'walk dog';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('walk dog');
  });

  it('should not call handleAddTodo if invalid todo entered', () => {
    var spy = expect.createSpy();

    var addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})
