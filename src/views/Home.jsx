import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import 'tailwindcss/tailwind.css';

const Home = () => {
  const tasks = []; // Placeholder

  return (
    <div className="min-h-screen bg-black-100 flex flex-col items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-white">Task Manager</h1> {/* Added text-white class */}
        <TaskForm />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Home;