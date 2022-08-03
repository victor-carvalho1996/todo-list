import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { FilterCases, Task } from './types';

interface IProps {
  taskList: Task[];
  selectedTask: Task | undefined;
  startEditing: (id: string) => void;
  editTask: () => void;
  deleteTask: (id: string) => void;
  checkTask: (id: string) => void;
}

function TaskDashboard(props: IProps) {
  const {
    taskList,
    selectedTask,
    startEditing,
    editTask,
    deleteTask,
    checkTask,
  } = props;

  const [filter, setFilter] = useState<FilterCases>(FilterCases.ALL);
  const [taskToShow, setTaskToShow] = useState<Task[]>([]);

  const filterTasks = () => {
    if (filter === FilterCases.COMPLETE) {
      setTaskToShow(taskList.filter((task) => task.taskComplete === true));
    }

    if (filter === FilterCases.ACTIVE) {
      setTaskToShow(taskList.filter((task) => task.taskComplete === false));
    }

    if (filter === FilterCases.ALL) {
      setTaskToShow(taskList);
    }
  };

  useEffect(() => {
    filterTasks();
  }, [filter, taskList]);

  return (
    <>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          onClick={() => setFilter(FilterCases.ALL)}
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          onClick={() => setFilter(FilterCases.ACTIVE)}
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          onClick={() => setFilter(FilterCases.COMPLETE)}
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Complete</button>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">Tasks remaining</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskToShow.map((task: Task) => {
          return (
            <TaskItem
              selectedTask={selectedTask}
              startEditing={(taskId: string) => startEditing(taskId)}
              editTask={() => editTask()}
              deleteTask={(taskId: string) => deleteTask(taskId)}
              checkTask={(taskId: string) => checkTask(taskId)}
              task={task}
            />
          );
        })}
      </ul>
    </>
  );
}
export default TaskDashboard;
