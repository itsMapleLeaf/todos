import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { dispatch, store } from './store'
import { App } from './todos/components/App'

function render() {
  ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById('root'),
  )
}

render()
store.subscribe(render)

if (module.hot) {
  module.hot.accept('./components/App', render)
}

dispatch({ type: 'ADD_TODO', text: 'do a thing' })
dispatch({ type: 'ADD_TODO', text: 'do another thing' })
dispatch({ type: 'ADD_TODO', text: 'cry a little' })
