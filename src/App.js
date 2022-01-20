import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Wrapper } from '~/src/styled/PageElements'

import { Pan } from '~/src/components/Pan'
import { ProcessStep } from './components/ProcessStep'
import { SetupVerification } from '~/src/components/SetupVerification'

const App = () => (
  <Router>
    <Wrapper>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path='/process' element={<ProcessStep />}>
            <Route path='pan' element={<Pan />} />
          </Route>
          <Route exact path='/' element={<SetupVerification />} />
        </Routes>
      </Suspense>  
    </Wrapper>
  </Router>
)

export { App }