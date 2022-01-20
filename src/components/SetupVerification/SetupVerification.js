import React from 'react'
import { useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'
import { PanInput } from '~/src/components/Pan'

import { useSteps } from '~/src/store/step'

import { Heading, Body } from '~/src/styled/PageElements'
import { StartButton, CancelButton } from '~/src/styled/Button'

const SetupVerification = () => {
  const inputs = {
    pan: () => <PanInput key='pan' />
  }

  const navigate = useNavigate()
  const [steps] = useSteps()

  const start = () => navigate('/process')

  return (
    <>
      <MastHead />
      <Heading>Data Gateway</Heading>
      <Body>Please provide these details to begin the verification</Body>
      {steps.map(step => inputs[step.key]())}
      <StartButton onClick={start}>Begin Verification</StartButton>
      <CancelButton>Cancel</CancelButton>
    </>
  )
}

export default SetupVerification