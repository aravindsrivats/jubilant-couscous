import React from 'react'
import { useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { Heading } from '~/src/styled/PageElements'
import { StartButton, CancelButton } from '~/src/styled/Button'

import { StepList, StepItem, Count, Block } from './styled'

const VerificationStatus = () => {
  const navigate = useNavigate()
  const [steps] = useSteps()

  const start = () => navigate('/setup')

  return (
    <>
      <MastHead />
      <Heading>Data Gateway</Heading>
      <StepList>
        {
          steps.map((step, index) => {
            return (
              <StepItem key={step.key}>
                <Count>{index+1}</Count>
                {step.name}
              </StepItem>
            )
          })
        }
      </StepList>
      <Block>You will be taken through a step-by-step  process to complete the verification of these data blocks</Block>
      <StartButton onClick={start}>Get Started</StartButton>
      <CancelButton>Cancel</CancelButton>
    </>
  )
}

export default VerificationStatus