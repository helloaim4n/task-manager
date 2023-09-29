import  { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from "@firebase/firestore";

const TaskForm = () => {
    const [task, setTask] = useState('');

    // Handle the "Add" button
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (task.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        try {
            const tasksCollection = collection(db, 'tasks');

            await addDoc(tasksCollection, {
                title: task,
                completed: false
            });

            alert('Task added succesfully!');
            setTask('');
        } catch (error) {
            alert('There was an error adding the task. Please try again.');
        }
    };
    

    return (
        <form onSubmit={handleSubmit} className="flex justify-center items-center">
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task..." className="border-2 border-gray-400 rounded-md py-2 px-4 mr-2" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add</button>
        </form>
    )
}

export default TaskForm;