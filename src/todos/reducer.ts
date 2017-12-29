import immer from 'immer'

import { TodoAction, TodoModel, TodoState } from './types'

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

    if (action.type === 'CLEAR_FINISHED_TODOS') {
      state.todos = state.todos.filter(t => !t.done)
    }

    if (action.type === 'REMOVE_TODO') {
      state.todos = state.todos.filter(t => t.id !== action.id)
    }
  })
}
