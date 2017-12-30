import * as React from 'react'

import { TodoActions } from '../todos/containers/TodoActions'
import { TodoList } from '../todos/containers/TodoList'

export function App() {
  return (
    <>
      <h1>awesome todo app</h1>
      <TodoActions />
      <hr />
      <TodoList />
    </>
  )
}
