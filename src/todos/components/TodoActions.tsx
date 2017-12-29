import * as React from 'react'

import { StoreConsumer } from '../../storeContext'
import { NewTodoForm } from './NewTodoForm'

export function TodoActions() {
  return (
    <StoreConsumer>
      {({ dispatch }) => (
        <>
          <NewTodoForm />
          <button onClick={() => dispatch({ type: 'CLEAR_FINISHED_TODOS' })}>
            Clear Finished Todos
          </button>
        </>
      )}
    </StoreConsumer>
  )
}
