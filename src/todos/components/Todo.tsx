import * as React from 'react'

import { StoreConsumer } from '../../storeContext'
import { TodoModel } from '../types'

type Props = {
  todo: TodoModel
}

export function Todo({ todo }: Props) {
  const style = todo.done ? { textDecoration: 'line-through', opacity: 0.5 } : {}

  return (
    <StoreConsumer>
      {({ dispatch }) => (
        <li style={style}>
          <input
            type="checkbox"
            checked={todo.done}
            onInput={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
          />
          {todo.text}
        </li>
      )}
    </StoreConsumer>
  )
}
