var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//components
const TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

// store.subscribe(() => {
//   var state = store.getState()
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

//load cusotm css
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
