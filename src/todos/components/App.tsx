import * as React from 'react'

import { Dispatch } from '../../store'
import { TodoState } from '../models'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

type Props = {
  state: TodoState
  dispatch: Dispatch
}

export function App(props: Props) {
  return (
    <>
      <h1>awesome todo app</h1>
      <NewTodoForm dispatch={props.dispatch} />
      <TodoList todos={props.state.todos} dispatch={props.dispatch} />
    </>
  )
}
