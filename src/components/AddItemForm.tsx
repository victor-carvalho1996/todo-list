import React, { useState } from 'react';

function AddItemForm({ handleAdd }: any) {
  const domInputId = 'new-todo-input';
  const [useTextTask, setTextTask] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTextTask(event.target.value);
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
      />
      <button
        type="button"
        onClick={() => handleAdd(useTextTask)}
        className="btn btn__primary btn__lg"
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
