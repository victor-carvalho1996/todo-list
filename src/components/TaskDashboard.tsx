import React from 'react';
import TaskItem from './TaskItem';
import { TypeFilterTask, Task } from './types';

interface IProps {
  taskToShow: Task[];
  selectedTask: Task | undefined;
  startEditing: (id: string) => void;
  editTask: () => void;
  deleteTask: (id: string) => void;
  checkTask: (id: string) => void;
  setFilter: (typeFilterTask: TypeFilterTask) => void;
}

function TaskDashboard(props: IProps) {
  const {
    taskToShow,
    selectedTask,
    startEditing,
    editTask,
    deleteTask,
    checkTask,
    setFilter,
  } = props;
  return (
    <>
      <div className="filters btn-group stack-exception">
        <button
          type="button"
          onClick={() => setFilter(TypeFilterTask.ALL)}
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">All</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          onClick={() => setFilter(TypeFilterTask.ACTIVE)}
          className="btn toggle-btn"
        >
          <span className="visually-hidden">Show </span>
          <button type="button">Active</button>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button
          type="button"
          onClick={() => setFilter(TypeFilterTask.COMPLETE)}
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
