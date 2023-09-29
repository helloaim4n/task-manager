import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import 'tailwindcss/tailwind.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from "@firebase/firestore";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksCollection = collection(db, 'tasks');
                const snapshot = await getDocs(tasksCollection);
                const fetchedTasks = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTasks(fetchedTasks);
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };
        
    fetchTasks();
    }, []);

    return (
        <div className="min-h-screen bg-black-100 flex flex-col items-center justify-center">
            <div className="bg-black p-8 rounded-lg shadow-md w-150">
                <h1 className="text-2xl font-bold mb-4 text-white">Task Manager</h1>
                <TaskForm />
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
};

export default Home;

