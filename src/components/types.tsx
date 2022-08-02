export interface Task {
  id: string;
  textTask: string;
  taskComplete: boolean;
}

export enum StateTask {
  ALL,
  COMPLETE,
  ACTIVE,
}
