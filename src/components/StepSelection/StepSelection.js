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

  const start = () => navigate('/setup')

  return (
    <>
      <Selection>
        <Heading>Data Gateway (for the dev)</Heading>
        <Body>The order and selections are configurable</Body>
        {
          steps.map(step => {
            return (<Checkbox key={step.key} id={step.key} label={step.name} toggle={setStepQueue} />)
          })
        }
      </Selection>
      <StartButton onClick={start}>Start</StartButton>
    </>
  )
}

export default StepSelection