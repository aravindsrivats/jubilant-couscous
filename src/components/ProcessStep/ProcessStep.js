import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { TickBox } from '~/src/styled/PageElements'
import { Wrapper, StepInfo, StepItem, CountBox } from './styled'

const ProcessStep = () => {
  const navigate = useNavigate()
  const [steps, _, setStepProgress, setStepComplete] = useSteps()

  useEffect(() => {
    if (steps.every(step => step?.completed)) {
      navigate('/setup', { replace: true })
    } else {
      const nextStep = steps.find(step => step?.inQueue && !step?.completed)
      if (!nextStep.inProgress) {
        setStepProgress(`${nextStep.key}`)
        navigate(`${nextStep.key}`)
      }
    }
  }, [steps])

  return (
    <Wrapper>
      <MastHead />
      <StepInfo>
        {
          steps.map((step, index) => {
            let state = 'queue'
            if (step.inProgress) state = 'progress'
            if (step.completed) state = 'completed'
            return (
              <StepItem key={step.key}>
                <CountBox state={state}>
                  {!step.completed ? index+1 : <TickBox />}
                </CountBox>
                {step.name}
              </StepItem>
            )
          })
        }
      </StepInfo>
      <Outlet context={setStepComplete} />
    </Wrapper>
  )
}

export default ProcessStep