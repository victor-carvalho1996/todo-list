import React, { useState } from 'react';
import './App.css';
import { ITaskList } from '@components/types';
import { v4 as uuidv4 } from 'uuid';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setListTask] = useState<ITaskList[]>([]);

  const handleAddTask = (text: string) => {
    const newList: any = { ...taskList };

    const uniqueId: string = uuidv4();

    newList[uniqueId] = {
      id: uniqueId,
      textTask: text,
      taskComplete: false,
    };

    setListTask(newList);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm handleAdd={handleAddTask} />
      <TaskDashboard tasks={taskList} />
    </div>
  );
}

export default App;
