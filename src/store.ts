import { createStore } from 'redux'

import { TodoAction } from './todos/actions'
import { TodoState } from './todos/models'
import { todosReducer } from './todos/reducer'

export const store = createStore(todosReducer, new TodoState())
export const dispatch: Dispatch = store.dispatch

export type Store = typeof store
export type Dispatch = (action: TodoAction) => void
