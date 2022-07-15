import React, { useState } from 'react';

function AddItemForm({ handleAdd, useTextTask, handleChangeInput }: any) {
  const domInputId = 'new-todo-input';
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
        onChange={handleChangeInput}
        value={useTextTask}
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
