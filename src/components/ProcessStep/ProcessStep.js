import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { Spinner } from '~/src/components/Spinner'

import { TickBox } from '~/src/styled/PageElements'
import { Wrapper, StepInfo, StepItem, CountBox, Info } from './styled'

const ProcessStep = () => {
  const navigate = useNavigate()
  const [next, setNext] = useState(false)
  const [steps, _, setStepProgress, setStepComplete] = useSteps()

  useEffect(() => {
    if (steps.every(step => step?.completed)) {
      navigate('/setup', { replace: true })
    } else {
      const nextStep = steps.find(step => step?.inQueue && !step?.completed)
      if (!nextStep.inProgress) {
        setNext(nextStep.name)
        setTimeout(() => {
          setNext(false)
          setStepProgress(`${nextStep.key}`)
          navigate(`${nextStep.key}`)
        }, 2000)
      }
    }
  }, [steps])

  if (next) {
    return (
      <Wrapper>
        <MastHead />
        <Spinner />
        <Info>Proceeding to {next}</Info>
      </Wrapper>
    )
  }

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