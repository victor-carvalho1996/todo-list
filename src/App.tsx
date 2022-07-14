import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard, { Task } from './components/TaskDashboard';

function App() {
  const [useListTask, setListTask] = useState<Task[]>([]);

  const handleAddTask = (text: string) => {
    const task: Task = {
      id: useListTask.length,
      textTask: text,
    };
    setListTask([...useListTask, task]);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm handleAdd={handleAddTask} />
      <TaskDashboard tasks={useListTask} handleAddTask={setListTask} />
    </div>
  );
}

export default App;
