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
});
