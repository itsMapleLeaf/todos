import { TodoModel } from './models'

export type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: TodoModel['id'] }
