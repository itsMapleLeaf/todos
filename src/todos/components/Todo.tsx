import * as React from 'react'

import { Dispatch } from '../../store'
import { TodoModel } from '../models'

type Props = {
  todo: TodoModel
  dispatch: Dispatch
}

export function Todo({ todo, ...props }: Props) {
  const style = { textDecoration: todo.done ? 'line-through' : undefined }

  return (
    <li style={style}>
      <input
        type="checkbox"
        checked={todo.done}
        onInput={() => props.dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
      />
      {todo.text}
    </li>
  )
}
