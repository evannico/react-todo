var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
const TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleCompleted());

//load foundation
$(document).foundation();

//load cusotm css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
