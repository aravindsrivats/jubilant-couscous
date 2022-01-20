import React from 'react'

import { PanInput } from '~/src/components/Pan'

import { useSteps } from '~/src/store/input'

const CollectInput = () => {
  const inputs = {
    pan: () => <PanInput key='pan' />
  }

  const [steps] = useSteps()

  return (
    <>
      {steps.map(step => inputs[step]())}
    </>
  )
}

export default CollectInput