import React from 'react';
import { Task } from './types';

interface IProps {
  selectedTask: Task | undefined;
  startEditing: (id: string) => void;
  editTask: () => void;
  deleteTask: (id: string) => void;
  checkTask: (id: string) => void;
  task: Task;
}

function TaskItem(props: IProps) {
  const { selectedTask, startEditing, editTask, deleteTask, checkTask, task } =
    props;
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={task.id}
          checked={task.taskComplete}
          onChange={() => checkTask(task.id)}
          type="checkbox"
        />
        <label className="todo-label" htmlFor={task.id}>
          {task.textTask}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() =>
            selectedTask?.id === task.id ? editTask() : startEditing(task.id)
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
}
export default TaskItem;
