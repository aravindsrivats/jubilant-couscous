import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MastHead } from '~/src/components/MastHead'
import { PanInput } from '~/src/components/PanVerification'
import { BankInput } from '~/src/components/BankVerification'
import { AadharInput } from '~/src/components/AadharVerification'

import { useSteps } from '~/src/store/step'

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

export default InputVerification