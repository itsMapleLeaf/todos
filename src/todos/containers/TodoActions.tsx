import * as React from 'react'

import { StoreConsumer } from '../../app/storeContext'
import { NewTodoForm } from '../components/NewTodoForm'
import { TodoFilters } from '../components/TodoFilters'

export function TodoActions() {
  return (
    <StoreConsumer>
      {({ state, dispatch }) => (
        <>
          <section>
            <NewTodoForm onSubmit={text => dispatch({ type: 'ADD_TODO', text })} />{' '}
            <button onClick={() => dispatch({ type: 'CLEAR_FINISHED_TODOS' })}>
              Clear Finished Todos
            </button>
          </section>
          <hr />
          <section>
            <TodoFilters
              filter={state.filter}
              onFilterChange={filter => dispatch({ type: 'SET_TODO_FILTER', filter })}
            />
          </section>
        </>
      )}
    </StoreConsumer>
  )
}
