const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');



export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todo = this.refs.todo.value;
    if(todo !== '') {
      dispatch(actions.startAddTodo(todo));
      this.refs.todo.value = '';
    } else {
      this.refs.todo.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
          <input type="text" ref="todo" placeholder="Add Something To Do"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
