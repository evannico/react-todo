const React = require('react');
import Todo from 'Todo';
const {connect} = require('react-redux');

export const TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do!</p>
        )
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      });
    }

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      todos:state.todos
    };
  }
)(TodoList);
