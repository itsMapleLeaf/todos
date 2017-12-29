import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app/App'
import { applyGlobalStyles } from './app/globalStyles'
import { dispatch, store } from './app/store'
import { StoreProvider } from './app/storeContext'

function render() {
  const root = (
    <StoreProvider value={store}>
      <App />
    </StoreProvider>
  )
  ReactDOM.render(root, document.getElementById('root'))

  applyGlobalStyles()
}

render()
store.subscribe(render)

if (module.hot) {
  module.hot.accept('./app/App', render)
}

dispatch({ type: 'ADD_TODO', text: 'do a thing' })
dispatch({ type: 'ADD_TODO', text: 'do another thing' })
dispatch({ type: 'ADD_TODO', text: 'cry a little' })
