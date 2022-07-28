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

  const addTask = (text: string) => {
    const newTask: Task = {
      id: uuidv4(),
      textTask: text,
      taskComplete: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskText('');
  };

  const startEditing = (id: string) => {
    const taskToEdit: Task | undefined = taskList.find((task: Task) => {
      return task.id === id;
    });

    if (taskToEdit === undefined) return;
    setSelectedTask(taskToEdit);
    setTaskText(taskToEdit.textTask);
  };

  const editTask = () => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === selectedTask?.id)
          return { ...task, textTask: taskText };
        return task;
      }),
    );
    setSelectedTask(undefined);
    setTaskText('');
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
        startEditing={startEditing}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
