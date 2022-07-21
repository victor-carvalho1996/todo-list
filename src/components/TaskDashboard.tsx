import React from 'react';
import { Task } from './types';

interface TaskList {
  taskList: Task[];
}

function TaskDashboard(props: TaskList) {
  const { taskList } = props;
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
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
        <li className="todo stack-small">
          {taskList.map((task: Task) => {
            return (
              <div className="c-cb">
                <input id={task.id} type="checkbox" />
                <label className="todo-label" htmlFor={task.id}>
                  {task.textTask}
                </label>
              </div>
            );
          })}
          <div className="btn-group">
            <button type="button" className="btn">
              save
              <span className="visually-hidden" />
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden" />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
export default TaskDashboard;
