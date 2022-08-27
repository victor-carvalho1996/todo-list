import React, { useContext, useEffect, useState } from 'react';
import TaskItem from './TaskItem';
import { FilterCases, ITodoContext, Task } from './types';
import { TodoContext } from '../ContextTodo';

function TaskDashboard() {
  const { taskList } = useContext(TodoContext) as ITodoContext;

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
          return <TaskItem task={task} />;
        })}
      </ul>
    </>
  );
}
export default TaskDashboard;
