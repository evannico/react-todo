const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

var Todo = require('Todo');

describe('Todo Component', () => {
  it('should render', () => {
    expect(Todo).toExist();
  });
});
