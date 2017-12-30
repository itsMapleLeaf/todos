import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { Todo } from '../components/Todo'
import { TodoList as TodoListComponent } from '../components/TodoList'
import { TodoFilter, TodoState } from '../types'

function getFilteredTodos(state: TodoState) {
  switch (state.filter) {
    case TodoFilter.all:
      return state.todos
    case TodoFilter.completed:
      return state.todos.filter(t => t.done)
    case TodoFilter.notCompleted:
      return state.todos.filter(t => !t.done)
  }
}

export function TodoList() {
  return (
    <StoreConsumer>
      {({ state, dispatch }) => {
        return (
          <TodoListComponent>
            {getFilteredTodos(state).map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
                onRemove={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
              />
            ))}
          </TodoListComponent>
        )
      }}
    </StoreConsumer>
  )
}
