import * as React from 'react'

import { TodoActions } from './TodoActions'
import { TodoList } from './TodoList'

export function App() {
  return (
    <>
      <h1>awesome todo app</h1>
      <TodoActions />
      <TodoList />
    </>
  )
}
