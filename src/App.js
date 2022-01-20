import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Wrapper } from '~/src/styled/PageElements'
import { CollectInput } from './components/CollectInput'

const App = () => (
  <Router>
    <Wrapper>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path='/'>
            <CollectInput />
          </Route>
        </Switch>
      </Suspense>  
    </Wrapper>
  </Router>
)

export { App }