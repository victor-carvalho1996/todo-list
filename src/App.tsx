import React, { useState } from 'react';
import './App.css';
import { Task } from '@components/types';
import { v4 as uuidv4 } from 'uuid';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: uuidv4(),
      textTask: text,
      taskComplete: false,
    };

    setTaskList([...taskList, newTask]);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm handleAdd={addTask} />
      <TaskDashboard taskList={taskList} />
    </div>
  );
}

export default App;
