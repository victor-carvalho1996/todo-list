import { parse } from 'path';
import React, { Props, useState } from 'react';

export interface Task {
  id: number;
  textTask: string;
}

function TaskDashboard({ tasks, handleAddTask }: any) {
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
          {tasks.map((task: Task) => {
            return (
              <div className="c-cb">
                <input id={task.id.toString()} type="checkbox" />
                <label className="todo-label" htmlFor={task.id.toString()}>
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
