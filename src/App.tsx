import React, { useState } from 'react';
import './App.css';
import { ITaskList } from '@components/types';
import { v4 as uuidv4 } from 'uuid';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [taskList, setListTask] = useState<ITaskList[]>([]);
  const [taskText, setTextTask] = useState<string>('');
  const [isEdit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState<string>('');

  const handleAddTask = (text: string) => {
    const newList: any = { ...taskList };

    const uniqueId: any = uuidv4();

    newList[uniqueId] = {
      id: uniqueId,
      textTask: text,
      taskComplete: false,
    };

    setListTask(newList);

    setTextTask('');
  };

  const handleClickEdit = (id: any) => {
    const list: ITaskList[] = { ...taskList };

    setEdit(true);

    setIdEdit(id);

    const task: any = list[id];

    setTextTask(task.textTask);
  };

  const resetStates = () => {
    setEdit(false);

    setIdEdit('');

    setTextTask('');
  };

  const saveTask = () => {
    const newList: any = { ...taskList };

    newList[idEdit].textTask = taskText;

    setListTask(newList);

    resetStates();
  };

  const handleSaveEdit = () => {
    if (isEdit) {
      saveTask();
    }
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        handleAdd={handleAddTask}
        setTextTask={setTextTask}
        taskText={taskText}
      />
      <TaskDashboard
        tasks={taskList}
        handleClickEdit={handleClickEdit}
        isEdit={isEdit}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
}

export default App;
