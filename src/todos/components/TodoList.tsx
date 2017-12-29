import * as React from 'react'

import { TodoModel } from '../types'
import { Todo } from './Todo'

type Props = {
  todos: TodoModel[]
  onToggle: (id: TodoModel['id']) => void
}

export function TodoList(props: Props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} onToggle={() => props.onToggle(todo.id)} />
        </li>
      ))}
    </ul>
  )
}
