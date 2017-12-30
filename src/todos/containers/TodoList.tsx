import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { Todo } from '../components/Todo'
import { TodoList as TodoListComponent } from '../components/TodoList'

export function TodoList() {
  return (
    <StoreConsumer>
      {({ state, dispatch }) => (
        <TodoListComponent>
          {state.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
              onRemove={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
            />
          ))}
        </TodoListComponent>
      )}
    </StoreConsumer>
  )
}
