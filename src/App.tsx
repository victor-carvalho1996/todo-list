import React, { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TaskDashboard from './components/TaskDashboard';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import { TypeFilterTask, Task } from './components/types';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();
  const [filter, setFilter] = useState<TypeFilterTask>(TypeFilterTask.ALL);
  const [taskToShow, setTaskToShow] = useState<Task[]>([]);

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

  const deleteTask = (id: string) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
    setSelectedTask(undefined);
    setTaskText('');
  };

  const checkTask = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, taskComplete: !task.taskComplete };
        }
        return task;
      }),
    );
  };

  const filterTasks = () => {
    if (filter === TypeFilterTask.COMPLETE) {
      return setTaskToShow(
        taskList.filter((task) => task.taskComplete === true),
      );
    }

    if (filter === TypeFilterTask.ACTIVE) {
      return setTaskToShow(
        taskList.filter((task) => task.taskComplete === false),
      );
    }

    return setTaskToShow(taskList);
  };

  useEffect(() => {
    filterTasks();
  }, [filter, taskList]);

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        handleAdd={addTask}
        setTaskText={setTaskText}
        taskText={taskText}
      />
      <TaskDashboard
        taskToShow={taskToShow}
        selectedTask={selectedTask}
        startEditing={startEditing}
        editTask={editTask}
        deleteTask={deleteTask}
        checkTask={checkTask}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
