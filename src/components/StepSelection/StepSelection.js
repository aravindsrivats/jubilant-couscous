import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useSteps, useStepList } from '~/src/store/step'
import { Checkbox } from './Checkbox'

const StepSelection = () => {
  const navigate = useNavigate()
  const [_, setStepQueue] = useSteps()
  const steps = useStepList()

  const start = () => navigate('/home')

  return (
    <>
      {
        steps.map(step => {
          return (<Checkbox key={step.key} step={step} toggle={setStepQueue} />)
        })
      }
      <button onClick={start}>Start</button>
    </>
  )
}

export default StepSelection