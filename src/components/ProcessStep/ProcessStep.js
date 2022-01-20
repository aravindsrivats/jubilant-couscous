import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { StepInfo, StepItem, Count } from './styled'

const ProcessStep = () => {
  const navigate = useNavigate()
  const [steps, setStepComplete] = useSteps()

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