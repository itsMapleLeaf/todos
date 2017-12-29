import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './App'
import { applyGlobalStyles } from './globalStyles'
import { dispatch, store } from './store'
import { StoreProvider } from './storeContext'

function render() {
  const root = (
    <StoreProvider value={store}>
      <App />
    </StoreProvider>
  )

  ReactDOM.render(root, document.getElementById('root'))
}

render()
store.subscribe(render)
applyGlobalStyles()

if (module.hot) {
  module.hot.accept('./App', render)
}

dispatch({ type: 'ADD_TODO', text: 'do a thing' })
dispatch({ type: 'ADD_TODO', text: 'do another thing' })
dispatch({ type: 'ADD_TODO', text: 'cry a little' })
