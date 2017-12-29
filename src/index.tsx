import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { dispatch, store } from './store'
import { StoreProvider } from './storeContext'
import { App } from './todos/components/App'

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

if (module.hot) {
  module.hot.accept('./components/App', render)
}

dispatch({ type: 'ADD_TODO', text: 'do a thing' })
dispatch({ type: 'ADD_TODO', text: 'do another thing' })
dispatch({ type: 'ADD_TODO', text: 'cry a little' })
