import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Wrapper } from '~/src/styled/PageElements'

import { PanVerification } from '~/src/components/PanVerification'
import { BankVerification } from '~/src/components/BankVerification'
import { AadharVerification } from '~/src/components/AadharVerification'
import { ESign } from '~/src/components/ESign'
import { ProcessStep } from './components/ProcessStep'
import { SetupVerification } from '~/src/components/SetupVerification'
import { VerificationStatus } from '~/src/components/VerificationStatus'
import { StepSelection } from '~/src/components/StepSelection'

const App = () => (
  <Router>
    <Wrapper>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path='/process' element={<ProcessStep />}>
            <Route path='pan' element={<PanVerification />} />
            <Route path='bank' element={<BankVerification />} />
            <Route path='aadhar' element={<AadharVerification />} />
            <Route path='esign' element={<ESign />} />
          </Route>
          <Route exact path='/setup' element={<SetupVerification />} />
          <Route exact path='/home' element={<VerificationStatus />} />
          <Route exact path='/' element={<StepSelection />} />
        </Routes>
      </Suspense>  
    </Wrapper>
  </Router>
)

export { App }