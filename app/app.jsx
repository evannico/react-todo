var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//load foundation
$(document).foundation();

//load cusotm css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <p>React Boilerplate</p>,
  document.getElementById('app')
);
