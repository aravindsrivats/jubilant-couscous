import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useSteps, useStepList } from '~/src/store/step'

import { Checkbox } from './Checkbox'

import { Heading, Body } from '~/src/styled/PageElements'
import { StartButton } from '~/src/styled/Button'

import { Selection } from './styled'

const StepSelection = () => {
  const navigate = useNavigate()
  const [_, setStepQueue] = useSteps()
  const steps = useStepList()

  const start = () => navigate('/home')

  return (
    <>
      <Selection>
        <Heading>Data Gateway (for the dev)</Heading>
        <Body>The order and selections are configurable</Body>
        {
          steps.map(step => {
            return (<Checkbox key={step.key} step={step} toggle={setStepQueue} />)
          })
        }
      </Selection>
      <StartButton onClick={start}>Start</StartButton>
    </>
  )
}

export default StepSelection