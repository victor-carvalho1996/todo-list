import { ITodoContext, Task } from '@components/types';
import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useState, ReactNode, useMemo } from 'react';

const TodoContext = createContext<ITodoContext | null>(null);

interface ProviderProps {
  children: ReactNode;
}

function ContextTodo({ children }: ProviderProps) {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [selectedTask, setSelectedTask] = useState<Task | undefined>();

  const addTask = () => {
    const newTask: Task = {
      id: uuidv4(),
      textTask: taskText,
      taskComplete: false,
    };

    setTaskList([...taskList, newTask]);
    setTaskText('');
  };

  const startEditing = (id: string) => {
    const taskToEdit: Task | undefined = taskList.find((task: Task) => {
      return task.id === id;
    });

    if (taskToEdit === undefined) return;
    setSelectedTask(taskToEdit);
    setTaskText(taskToEdit.textTask);
  };

  const editTask = () => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === selectedTask?.id)
          return { ...task, textTask: taskText };
        return task;
      }),
    );
    setSelectedTask(undefined);
    setTaskText('');
  };

  const deleteTask = (id: string) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );
    setSelectedTask(undefined);
    setTaskText('');
  };

  const checkTask = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        return task.id === id
          ? { ...task, taskComplete: !task.taskComplete }
          : task;
      }),
    );
  };

  const todoContextData = useMemo<ITodoContext>(() => {
    return {
      taskList,
      selectedTask,
      taskText,
      addTask,
      startEditing,
      editTask,
      deleteTask,
      checkTask,
      setTaskText,
    };
  }, [taskText, selectedTask, taskList]);

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
}

export { ContextTodo, TodoContext };
