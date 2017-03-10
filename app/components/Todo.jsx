const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
