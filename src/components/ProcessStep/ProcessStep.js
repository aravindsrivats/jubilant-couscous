import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { StepInfo, StepItem, Count, CheckIcon } from './styled'

const ProcessStep = () => {
  const navigate = useNavigate()
  const [steps, setStepProgress, setStepComplete] = useSteps()

  useEffect(() => {
    if (steps.every(step => step?.completed)) {
      navigate('/', { replace: true })
    } else {
      const nextStep = steps.find(step => step?.inQueue && !step?.completed)
      if (!nextStep.inProgress) {
        setStepProgress(`${nextStep.key}`)
        navigate(`${nextStep.key}`)
      }
    }
  }, [steps])

  return (
    <>
      <MastHead />
      <StepInfo>
        {
          steps.map((step, index) => {
            let state = 'queue'
            if (step.inProgress) state = 'progress'
            if (step.completed) state = 'completed'
            return (
              <StepItem key={step.key}>
                <Count state={state}>
                  {!step.completed ? index+1 : <CheckIcon />}
                </Count>
                {step.name}
              </StepItem>
            )
          })
        }
      </StepInfo>
      <Outlet context={setStepComplete} />
    </>
  )
}

export default ProcessStep