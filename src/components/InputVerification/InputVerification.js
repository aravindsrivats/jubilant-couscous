import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'
import { PanInput } from '~/src/components/PanVerification'
import { BankInput } from '~/src/components/BankVerification'
import { AadharInput } from '~/src/components/AadharVerification'

import { useSteps } from '~/src/store/step'
import { useInput } from '~/src/store/input'

import { Heading, Body } from '~/src/styled/PageElements'
import { StartButton, CancelButton } from '~/src/styled/Button'

const InputVerification = () => {
  const [withESign, setWithESign] = useState(false)

  const inputs = {
    pan: () => <PanInput key='pan' />,
    bank: () => <BankInput key='bank' />,
    aadhar: () => <AadharInput key='aadhar' withESign={withESign} />,
    esign: () => !withESign && setWithESign(true),
  }

  const navigate = useNavigate()
  const [steps] = useSteps()
  const [values, validations, setInputError] = useInput()

  const start = () => {
    const fails = Object.keys(values).filter(item => steps.some(step => step.key === item)).map(item => {
      let valid = false
      if (typeof values[item] === 'string') {
        valid = validations[item](values[item])
        setInputError(item, !valid)
      } else {
        valid = !Object.keys(values[item]).map(internalItem => {
          const internalValid = validations[internalItem](values[item][internalItem])
          setInputError(item, !internalValid, internalItem)
          return internalValid
        }).includes(false)
      }
      return valid
    }).includes(false)

    if (!fails) {
      navigate('/process')
    }
  }

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

export default InputVerification