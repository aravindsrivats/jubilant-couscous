import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { StepInfo, StepItem, Count } from './styled'

const ProcessStep = () => {
  const navigate = useNavigate()
  const [steps, setStepComplete] = useSteps()

  useEffect(() => {
    if (steps.every(step => step?.completed)) {
      navigate('/', { replace: true })
    } else {
      const nextStep = steps.find(step => step?.inQueue && !step?.completed)
      navigate(`${nextStep.key}`)
    }
  }, [steps])

  return (
    <>
      <MastHead />
      <StepInfo>
        {
          steps.map((step, index) => {
            return (<StepItem key={step.key}><Count>{index+1}</Count>{step.name}</StepItem>)
          })
        }
      </StepInfo>
      <Outlet context={setStepComplete} />
    </>
  )
}

export default ProcessStep