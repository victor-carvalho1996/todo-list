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
