import * as React from 'react'

import { TodoModel } from '../types'

type Props = {
  todo: TodoModel
  onToggle: () => void
}

export function Todo({ todo, onToggle }: Props) {
  const style = todo.done ? { textDecoration: 'line-through', opacity: 0.5 } : {}

  return (
    <label style={style}>
      <input type="checkbox" checked={todo.done} onInput={() => onToggle()} />
      {todo.text}
    </label>
  )
}
