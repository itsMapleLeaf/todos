import immer from 'immer'

import { TodoAction } from './actions'
import { TodoModel, TodoState } from './models'

export function todosReducer(prevState: TodoState, action: TodoAction): TodoState {
  return immer(prevState, state => {
    if (action.type === 'ADD_TODO') {
      state.todos.push(new TodoModel(action.text))
    }

    if (action.type === 'TOGGLE_TODO') {
      const todo = state.todos.find(todo => todo.id === action.id)
      if (todo) {
        todo.done = !todo.done
      }
    }
  })
}
