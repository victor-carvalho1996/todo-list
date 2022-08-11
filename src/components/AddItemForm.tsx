import React, { useContext } from 'react';
import { ITodoContext } from './types';
import { TodoContext } from '../ContextTodo';

function AddItemForm() {
  const { addTask, setTaskText, taskText } = useContext(
    TodoContext,
  ) as ITodoContext;
  const domInputId = 'new-todo-input';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTaskText(event.target.value);
  };

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor={domInputId} className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id={domInputId}
        className="input input__lg"
        name={domInputId}
        onChange={handleChange}
        autoComplete="off"
        value={taskText}
      />
      <button
        type="button"
        onClick={() => addTask(taskText)}
        className="btn btn__primary btn__lg"
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
