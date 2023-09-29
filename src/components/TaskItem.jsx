import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { doc, updateDoc, deleteDoc } from "@firebase/firestore";
import { db } from '../../firebaseConfig'; // Adjust path if needed

const TaskItem = ({ task }) => {

  const toggleCompleted = async () => {
    try {
      const taskRef = doc(db, 'tasks', task.id);
      await updateDoc(taskRef, {
        completed: !task.completed
      })
    } catch (error) {
      console.error("Error updating task:", error);
    }
  }
  
  const deleteTask = async () => {
    try {
      const taskRef = doc(db, 'tasks', task.id);
      await deleteDoc(taskRef);
    } catch (error) {
      console.error("Error deleting tasks:", error);
    }
  }

  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={toggleCompleted} 
        />
        <span>{task.title}</span>
        <button 
          type="button" 
          onClick={deleteTask} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 rounded mt-2 ml-2"
        >
          <FontAwesomeIcon icon={faTimes} />

        </button>
    </li>
  );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
  };

export default TaskItem;