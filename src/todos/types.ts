export type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: TodoModel['id'] }
  | { type: 'CLEAR_FINISHED_TODOS' }

export class TodoState {
  todos = [] as TodoModel[]
}

export class TodoModel {
  id = Math.random()
  done = false
  constructor(public text: string) {}
}
