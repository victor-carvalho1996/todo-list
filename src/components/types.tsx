export interface Task {
  id: string;
  textTask: string;
  taskComplete: boolean;
}

export enum FilterCases {
  ALL,
  COMPLETE,
  ACTIVE,
}

export interface ITodoContext {
  taskList: Task[];
  selectedTask: Task | undefined;
  taskText: string;
  addTask: (textTask: string) => void;
  startEditing: (id: string) => void;
  editTask: () => void;
  deleteTask: (id: string) => void;
  checkTask: (id: string) => void;
  setTaskText: (id: string) => void;
}
