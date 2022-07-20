import React from 'react';

interface IProps {
  handleAdd: (textTask: string) => void;
  setTextTask: (text: string) => void;
  taskText: string;
}

function AddItemForm(props: IProps) {
  const { handleAdd, setTextTask, taskText } = props;
  const domInputId = 'new-todo-input';

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
        value={taskText}
      />
      <button
        type="button"
        onClick={() => handleAdd(taskText)}
        className="btn btn__primary btn__lg"
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
