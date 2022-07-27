import React, { useState } from 'react';
import './App.css';
import { Task } from '@components/types';
import { v4 as uuidv4 } from 'uuid';
import TaskDashboard from './components/TaskDashboard';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [idEdit, setIdEdit] = useState<string>('');

  const resetStates = () => {
    setIsEdit(false);

    setIdEdit('');

    setTaskText('');
  };

  const addTask = (text: string) => {
    const newTask: Task = {
      id: uuidv4(),
      textTask: text,
      taskComplete: false,
    };

    setTaskList([...taskList, newTask]);

    setTaskText('');
  };

  const clickEdit = (id: string) => {
    const taskToEdit: Task[] = taskList.filter((task: Task) => {
      return task.id === id;
    });

    setIsEdit(true);

    setIdEdit(id);

    setTaskText(taskToEdit[0].textTask);
  };

  const saveTask = () => {
    taskList.map((task: Task) => {
      const taskEdit: Task = task;
      if (taskEdit.id === idEdit) {
        taskEdit.textTask = taskText;
      }

      return taskEdit;
    });

    setTaskList(taskList);

    resetStates();
  };

  const saveEdit = () => {
    if (isEdit) {
      saveTask();
    }
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        handleAdd={addTask}
        setTaskText={setTaskText}
        taskText={taskText}
      />
      <TaskDashboard
        taskList={taskList}
        handleClickEdit={clickEdit}
        isEdit={isEdit}
        handleSaveEdit={saveEdit}
      />
    </div>
  );
}

export default App;
