import { createStore } from 'redux'

import { todosReducer } from './todos/reducer'
import { TodoAction, TodoState } from './todos/types'

export const store = createStore(todosReducer, new TodoState())
export const dispatch: Dispatch = store.dispatch

export type Store = typeof store
export type Dispatch = (action: TodoAction) => void
