import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Wrapper } from '~/src/styled/PageElements'
import { SetupVerification } from './components/SetupVerification'

const App = () => (
  <Router>
    <Wrapper>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <Route path='/'>
            <SetupVerification />
          </Route>
        </Switch>
      </Suspense>  
    </Wrapper>
  </Router>
)

export { App }