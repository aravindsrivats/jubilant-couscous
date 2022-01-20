import React from 'react'
import { Outlet } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { StepInfo, StepItem, Count } from './styled'

const ProcessStep = () => {
  const [steps, list] = useSteps()
  
  return (
    <>
      <MastHead />
      <StepInfo>
        {
          steps.map((step, index) => {
            return (<StepItem key={step}><Count>{index+1}</Count>{list[step]}</StepItem>)
          })
        }
      </StepInfo>
      <Outlet />
    </>
  )
}

export default ProcessStep