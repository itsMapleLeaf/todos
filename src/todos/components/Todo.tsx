import * as React from 'react'

import { TodoModel } from '../types'

type Props = {
  todo: TodoModel
  onToggle: () => void
  onRemove: () => void
}

export function Todo({ todo, ...props }: Props) {
  const style = todo.done ? { textDecoration: 'line-through', opacity: 0.5 } : {}

  return (
    <span style={style}>
      <button onClick={() => props.onRemove()}>X</button>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => props.onToggle()} />
        {todo.text}
      </label>
    </span>
  )
}
