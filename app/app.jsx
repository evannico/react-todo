var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//components
import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');
import Login from 'Login';


store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

//load cusotm css
require('style!css!sass!applicationStyle');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <Route path='todos' component={TodoApp}/>
        <IndexRoute component={Login}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
