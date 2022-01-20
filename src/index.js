import React from 'react'
import ReactDOM from 'react-dom'

import { App } from '~/src/App'

import { Provider, initialState } from '~/src/store'

ReactDOM.render(
  <Provider initial={initialState}>
    <App />
  </Provider>, 
  document.getElementById('root'),
)