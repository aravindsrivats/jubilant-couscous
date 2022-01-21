import React from 'react'

import { useSteps, useStepList } from '~/src/store/step'
import { Checkbox } from './Checkbox'

const StepSelection = () => {
  const [_, setStepQueue] = useSteps()
  const steps = useStepList()

  return (
    <>
      {
        steps.map(step => {
          return (<Checkbox key={step.key} step={step} toggle={setStepQueue} />)
        })
      }
    </>
  )
}

export default StepSelection