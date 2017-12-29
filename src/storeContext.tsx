import createReactContext from 'create-react-context'
import * as React from 'react'

import { Dispatch, store } from './store'
import { TodoState } from './todos/types'

const { Provider, Consumer } = createReactContext(store)

type StoreConsumerProps = {
  children: (props: { state: TodoState; dispatch: Dispatch }) => React.ReactNode
}

export const StoreConsumer = (props: StoreConsumerProps) => (
  <Consumer>
    {store =>
      props.children({
        state: store.getState(),
        dispatch: store.dispatch,
      })
    }
  </Consumer>
)

export { Provider as StoreProvider }
