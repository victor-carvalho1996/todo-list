import React from 'react';

export interface Task {
  id: number;
  textTask: string;
  completeTask: boolean;
}

export enum TypeFilter {
  All,
  Complete,
}

function TaskDashboard({
  tasks,
  handleSave,
  handleChangeCheckBox,
  handleEditClick,
  useEdit,
  handleDelete,
  handleChangeTypeFilter,
}: any) {
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button
            type="button"
            onClick={() => handleChangeTypeFilter(TypeFilter.All)}
          >
            All
          </button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn">
          <span className="visually-hidden">Show </span>
          <button
            type="button"
            onClick={() => handleChangeTypeFilter(TypeFilter.Complete)}
          >
            Complete
          </button>
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
                  onChange={() => handleChangeCheckBox(task.id)}
                  checked={task.completeTask}
                />
                <label
                  onDoubleClick={() => handleEditClick(task.id)}
                  className="todo-label"
                >
                  {task.textTask}
                </label>
              </div>
            );
          })}
          <div className="btn-group">
            <button type="button" className="btn" onClick={() => handleSave()}>
              {useEdit ? 'Save' : 'Edit'}
              <span className="visually-hidden" />
            </button>
            <button
              type="button"
              className="btn btn__danger"
              onClick={() => handleDelete()}
            >
              Delete <span className="visually-hidden" />
            </button>
          </div>
        </li>
      </ul>
    </>
  );
}
export default TaskDashboard;
