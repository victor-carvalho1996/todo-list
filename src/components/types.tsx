export interface Task {
  id: string;
  textTask: string;
  taskComplete: boolean;
}

export interface ITaskList {
  [value: string]: Task;
}
