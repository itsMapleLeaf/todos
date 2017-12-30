import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { Todo } from '../components/Todo'
import { TodoList as TodoListComponent } from '../components/TodoList'
import { getFilteredTodos } from '../selectors'

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
