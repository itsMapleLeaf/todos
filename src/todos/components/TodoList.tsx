import * as React from 'react'

import { Dispatch } from '../../store'
import { TodoModel } from '../models'
import { Todo } from './Todo'

export function TodoList(props: { todos: TodoModel[]; dispatch: Dispatch }) {
  return (
    <ul>{props.todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />)}</ul>
  )
}
