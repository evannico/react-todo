const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

var Search = require('Search');

describe('Search', () => {
  it('should render', () => {
    expect(Search).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'dog'
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.searchText.value = searchText;

    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, 'dog');
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
})
