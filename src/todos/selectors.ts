import { TodoFilter, TodoState } from './types'

export function getFilteredTodos(state: TodoState) {
  switch (state.filter) {
    case TodoFilter.all:
      return state.todos
    case TodoFilter.completed:
      return state.todos.filter(t => t.done)
    case TodoFilter.notCompleted:
      return state.todos.filter(t => !t.done)
  }
}
