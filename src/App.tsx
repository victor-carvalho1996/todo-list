import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard, { Task } from './components/TaskDashboard';

function App() {
  const [useListTask, setListTask] = useState<Task[]>([]);
  const [useEdit, setEdit] = useState<boolean>();
  const [useEditTask, setEditTask] = useState(-1);
  const [useTextTask, setTextTask] = useState('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTextTask(event.target.value);
  };

  const clearInput = () => {
    setTextTask('');
  };

  const handleAddTask = (text: string) => {
    const task: Task = {
      id: useListTask.length,
      textTask: text,
      checkedTask: false,
    };
    setListTask([...useListTask, task]);
    clearInput();
  };

  const fetchTaskChecked = () => {
    let resultTask: any;

    useListTask.forEach((task) => {
      if (task.checkedTask) {
        resultTask = task;
      }
    });

    return resultTask;
  };

  const existTaskChecked = (id: number) => {
    let haveTaskChecked = false;

    useListTask.forEach((task) => {
      if (task.checkedTask && id !== task.id) {
        haveTaskChecked = true;
      }

      if (task.checkedTask && !haveTaskChecked) {
        setEditTask(-1);
      }
    });

    return haveTaskChecked;
  };

  const handleChangeCheckBox = (id: number) => {
    const newList = [...useListTask];

    const haveTaskChecked = existTaskChecked(id);

    if (haveTaskChecked || useEdit) return;

    newList[id].checkedTask = !newList[id].checkedTask;

    setListTask(newList);

    if (useEditTask === -1) setEditTask(id);
  };

  const handleSave = () => {
    const newList = [...useListTask];

    newList[useEditTask].textTask = useTextTask;
    newList[useEditTask].checkedTask = false;

    setListTask(newList);

    clearInput();

    handleChangeCheckBox(useEditTask);

    setEditTask(-1);

    setEdit(false);
  };

  const handleEdit = () => {
    if (fetchTaskChecked() === undefined) return;

    setEdit(true);

    const taskChecked: any = fetchTaskChecked();

    if (taskChecked.length !== undefined) return;

    setTextTask(taskChecked.textTask);

    setEditTask(taskChecked.id);
  };

  const handleEditSave = () => {
    if (!useEdit) {
      handleEdit();
    } else {
      handleSave();
    }
  };

  const orderArray = (listTask: Task[]) => {
    const newListTask = listTask;

    for (let index = 0; index < listTask.length; index += 1) {
      newListTask[index].id = index;
    }

    setListTask(listTask);

    return newListTask;
  };

  const handleDelete = () => {
    if (fetchTaskChecked() === undefined) return;

    const newList = [...useListTask];

    const listTask = newList.filter((task: Task) => task.id !== useEditTask);

    setEditTask(-1);

    const listTasksOrder = orderArray(listTask);

    setListTask(listTasksOrder);
  };

  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm
        handleAdd={handleAddTask}
        useTextTask={useTextTask}
        handleChangeInput={handleChangeInput}
      />
      <TaskDashboard
        tasks={useListTask}
        handleAddTask={setListTask}
        handleEditSave={handleEditSave}
        handleChangeCheckBox={handleChangeCheckBox}
        useEdit={useEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
