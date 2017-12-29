import * as React from 'react'

import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

export function App() {
  return (
    <>
      <h1>awesome todo app</h1>
      <NewTodoForm />
      <TodoList />
    </>
  )
}
