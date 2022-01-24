import React from 'react'
import { useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'

import { useSteps } from '~/src/store/step'

import { Heading, Block, Display, Count, CheckIcon, TickBox } from '~/src/styled/PageElements'
import { StartButton, CancelButton } from '~/src/styled/Button'

import { StepList, StepItem } from './styled'

const VerificationStatus = () => {
  const navigate = useNavigate()
  const [steps, _, __, ___, resetSteps] = useSteps()

  const start = () => navigate('/input')

  const done = () => {
    resetSteps()
    navigate('/')
  }

  if (steps.every(step => step?.completed)) {
    return (
      <>
        <MastHead />
        <Heading>Successful!</Heading>
        <Block success nospace>
        <CheckIcon />
        <Display>All verifications are now complete</Display>
      </Block>
        <StepList>
          {
            steps.map((step, index) => {
              return (
                <StepItem key={step.key}>
                  <Count completed><TickBox /></Count>
                  {step.name}
                </StepItem>
              )
            })
          }
        </StepList>
        <StartButton onClick={done}>Done</StartButton>
      </>
    )
  }

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
      <CancelButton onClick={done}>Cancel</CancelButton>
    </>
  )
}

export default VerificationStatus