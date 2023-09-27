import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,    
};

export default TaskList;