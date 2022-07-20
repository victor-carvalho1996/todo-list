import React from 'react';
import { ITaskList } from './types';

interface TaskList {
  tasks: ITaskList[];
  handleClickEdit: (id: string) => void;
  isEdit: boolean;
  handleSaveEdit: () => void;
}

function TaskDashboard(props: TaskList) {
  const { tasks, handleClickEdit, isEdit, handleSaveEdit } = props;
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
          {Object.keys(tasks).map((element: any) => {
            return (
              <div className="c-cb">
                <input id={tasks[element].id.toString()} type="checkbox" />
                <label
                  className="todo-label"
                  onDoubleClick={() =>
                    handleClickEdit(tasks[element].id.toString())
                  }
                >
                  {tasks[element].textTask}
                </label>
              </div>
            );
          })}
          <div className="btn-group">
            <button type="button" className="btn" onClick={handleSaveEdit}>
              {isEdit ? 'Save' : 'Edit'}
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
