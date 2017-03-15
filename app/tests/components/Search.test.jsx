const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jQuery');

import {Search} from 'Search';

describe('Search', () => {
  it('should render', () => {
    expect(Search).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = 'dog'

    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: searchText
    }

    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

    search.refs.searchText.value = searchText;

    TestUtils.Simulate.change(search.refs.searchText);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    var spy = expect.createSpy();
    var search = TestUtils.renderIntoDocument(<Search dispatch={spy}/>);

    search.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(search.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(action);
  });
})
