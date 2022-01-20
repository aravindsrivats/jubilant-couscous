import React, { Suspense } from 'react'

import { Wrapper } from '~/src/styled/PageElements'
import { CollectInput } from './components/CollectInput'

const App = () => (
  <Wrapper>
    <Suspense fallback={<p>loading...</p>}>
      <CollectInput />
    </Suspense>  
  </Wrapper>
)

export { App }