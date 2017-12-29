import * as React from 'react'

import { TodoActions } from '../todos/components/TodoActions'
import { TodoList } from '../todos/components/TodoList'

export function App() {
  return (
    <>
      <h1>awesome todo app</h1>
      <TodoActions />
      <TodoList />
    </>
  )
}
