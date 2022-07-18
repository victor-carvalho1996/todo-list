import React, { useEffect, useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard, { Task, TypeFilter } from './components/TaskDashboard';

function App() {
  const [useListTask, setListTask] = useState<Task[]>([]);
  const [useListTaskFiltered, setListTaskFiltered] = useState<Task[]>([]);
  const [useEdit, setEdit] = useState<boolean>();
  const [useEditTask, setEditTask] = useState(-1);
  const [useTextTask, setTextTask] = useState('');
  const [useFilterAll, setFilterAll] = useState(true);
  const [useFilterComplete, setFilterComplete] = useState(false);
  const [useFilterActive, setFilterActive] = useState(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTextTask(event.target.value);
  };

  const refreshListTask = () => {
    let newList: Task[] = [];

    if (useFilterComplete) {
      newList = useListTask.filter((task: Task) => task.completeTask === true);
      setListTaskFiltered(newList);
    } else if (useFilterActive) {
      newList = useListTask.filter((task: Task) => task.completeTask === false);
      setListTaskFiltered(newList);
    } else {
      setListTaskFiltered(useListTask);
    }
  };

  const handleChangeTypeFilter = (type: TypeFilter) => {
    if (type === 0) {
      setFilterAll(true);
      setFilterActive(false);
      setFilterComplete(false);
    } else if (type === 1) {
      setFilterAll(false);
      setFilterActive(false);
      setFilterComplete(true);
    } else if (type === 2) {
      setFilterAll(false);
      setFilterComplete(false);
      setFilterActive(true);
    }
  };

  useEffect(() => {
    refreshListTask();
  });

  const resetStates = () => {
    setTextTask('');
    setEditTask(-1);
    setEdit(false);
  };

  const handleAddTask = (text: string) => {
    const task: Task = {
      id: useListTask.length,
      textTask: text,
      completeTask: false,
    };
    setListTask([...useListTask, task]);
    setListTaskFiltered([...useListTask, task]);
    setTextTask('');
  };

  const handleChangeCheckBox = (id: number) => {
    const newList = [...useListTask];

    newList[id].completeTask = !newList[id].completeTask;

    setListTask(newList);
  };

  const handleSave = () => {
    const newList = [...useListTask];

    newList[useEditTask].textTask = useTextTask;

    setListTask(newList);

    resetStates();
  };

  const handleEdit = (id: number) => {
    if (useEdit) return;

    setEdit(true);

    const taskChecked: any = useListTask[id];

    setTextTask(taskChecked.textTask);

    setEditTask(taskChecked.id);
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
    if (!useEdit) return;

    const newList = [...useListTask];

    const listTask = newList.filter((task: Task) => task.id !== useEditTask);

    resetStates();

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
        tasks={useListTaskFiltered}
        handleAddTask={setListTask}
        handleSave={handleSave}
        handleChangeCheckBox={handleChangeCheckBox}
        handleEditClick={handleEdit}
        useEdit={useEdit}
        handleDelete={handleDelete}
        handleChangeTypeFilter={handleChangeTypeFilter}
      />
    </div>
  );
}

export default App;
