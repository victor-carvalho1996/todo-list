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
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  const resetStates = () => {
    setSelectedTask(undefined);

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

    setSelectedTask(taskToEdit[0]);

    setTaskText(taskToEdit[0].textTask);
  };

  const editTask = () => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === selectedTask?.id)
          return { ...task, textTask: taskText };
        return task;
      }),
    );
    resetStates();
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
        selectedTask={selectedTask}
        handleClickEdit={clickEdit}
        handleEdit={editTask}
      />
    </div>
  );
}

export default App;
