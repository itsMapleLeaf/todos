import * as React from 'react'

import { StoreConsumer } from '../../storeContext'
import { TodoModel } from '../types'

type Props = {
  todo: TodoModel
}

export function Todo({ todo }: Props) {
  const style = { textDecoration: todo.done ? 'line-through' : undefined }

  return (
    <StoreConsumer>
      {(_, dispatch) => (
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
