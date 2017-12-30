export class TodoState {
  todos = [] as TodoModel[]
  filter = TodoFilter.all
}

export class TodoModel {
  id = Math.random()
  done = false
  constructor(public text: string) {}
}

export enum TodoFilter {
  all,
  completed,
  notCompleted,
}

export type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: TodoModel['id'] }
  | { type: 'CLEAR_FINISHED_TODOS' }
  | { type: 'REMOVE_TODO'; id: TodoModel['id'] }
  | { type: 'SET_TODO_FILTER'; filter: TodoFilter }
