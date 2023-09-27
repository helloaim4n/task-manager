import  { useState } from 'react';

const TaskForm = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add logic to send task to backend
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center">
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task..." className="border-2 border-gray-400 rounded-md py-2 px-4 mr-2" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
    )
}

export default TaskForm;