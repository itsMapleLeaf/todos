import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { Todo } from './Todo'

export function TodoList() {
  return (
    <StoreConsumer>
      {({ state }) => <ul>{state.todos.map(todo => <Todo todo={todo} key={todo.id} />)}</ul>}
    </StoreConsumer>
  )
}
