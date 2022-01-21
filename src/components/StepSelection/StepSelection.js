import React from 'react'

import { useStepList } from '~/src/store/step'
import { Checkbox } from './Checkbox'

const StepSelection = () => {
  const [steps, setStep] = useStepList()

  return (
    <>
      {
        steps.map(step => {
          return (<Checkbox key={step.key} step={step} toggle={setStep} />)
        })
      }
    </>
  )
}

export default StepSelection