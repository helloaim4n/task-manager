import PropTypes from 'prop-types';

const TaskItem = ({ task }) => {
  return (
    <li>
      <span>{task.title}</span>
      {/* TODO: Add logic for marking as completed and deleting */}
    </li>
  );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired
  };

export default TaskItem;