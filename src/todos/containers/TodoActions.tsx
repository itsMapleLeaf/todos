import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { NewTodoForm } from '../components/NewTodoForm'

export function TodoActions() {
  return (
    <StoreConsumer>
      {({ dispatch }) => (
        <>
          <NewTodoForm onSubmit={text => dispatch({ type: 'ADD_TODO', text })} />{' '}
          <button onClick={() => dispatch({ type: 'CLEAR_FINISHED_TODOS' })}>
            Clear Finished Todos
          </button>
        </>
      )}
    </StoreConsumer>
  )
}
