import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { TodoList as TodoListComponent } from '../components/TodoList'

export function TodoList() {
  return (
    <StoreConsumer>
      {({ state, dispatch }) => (
        <TodoListComponent
          todos={state.todos}
          onToggle={id => dispatch({ type: 'TOGGLE_TODO', id })}
          onRemove={id => dispatch({ type: 'REMOVE_TODO', id })}
        />
      )}
    </StoreConsumer>
  )
}
