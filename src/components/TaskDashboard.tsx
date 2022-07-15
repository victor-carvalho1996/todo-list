import React from 'react';

export interface Task {
  id: number;
  textTask: string;
  checkedTask: boolean;
}

function TaskDashboard({
  tasks,
  handleEditSave,
  handleChangeCheckBox,
  useEdit,
}: any) {
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
                <input
                  id={task.id.toString()}
                  type="checkbox"
                  onClick={() => handleChangeCheckBox(task.id)}
                  checked={task.checkedTask}
                />
                <label className="todo-label" htmlFor={task.id.toString()}>
                  {task.textTask}
                </label>
              </div>
            );
          })}
          <div className="btn-group">
            <button
              type="button"
              className="btn"
              onClick={() => handleEditSave()}
            >
              {useEdit ? 'Save' : 'Edit'}
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
