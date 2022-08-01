import React from 'react';
import { Task } from './types';

interface IProps {
  taskList: Task[];
  selectedTask: Task | undefined;
  startEditing: (id: string) => void;
  editTask: () => void;
  deleteTask: (id: string) => void;
}

function TaskDashboard(props: IProps) {
  const { taskList, selectedTask, startEditing, editTask, deleteTask } = props;
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
        {taskList.map((task: Task) => {
          return (
            <li className="todo stack-small">
              <div className="c-cb">
                <input id={task.id} type="checkbox" />
                <label className="todo-label" htmlFor={task.id}>
                  {task.textTask}
                </label>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn"
                  onClick={() =>
                    selectedTask?.id === task.id
                      ? editTask()
                      : startEditing(task.id)
                  }
                >
                  {selectedTask?.id === task.id ? 'Save' : 'Edit'}
                  <span className="visually-hidden" />
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  type="button"
                  className="btn btn__danger"
                >
                  Delete <span className="visually-hidden" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default TaskDashboard;
