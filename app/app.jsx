var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//components
const TodoApp = require('TodoApp');

//load foundation
$(document).foundation();

//load cusotm css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
