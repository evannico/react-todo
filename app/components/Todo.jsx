const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Added ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Finished ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMMM Do, YY @ h:mm a');
    }
    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
});

module.exports = Todo;
