export interface Task {
  id: string;
  textTask: string;
  taskComplete: boolean;
}

export enum TypeFilterTask {
  ALL,
  COMPLETE,
  ACTIVE,
}
