import React from 'react'

import { useAadhar } from '~/src/store/aadhar'

import { Tip, Label, TextField } from '~/src/styled/Input'

const AadharInput = ({ withESign }) => {
  const [{ number }, setAadhar] = useAadhar()

  const input = e => {
    const { value } = e.target
    setAadhar({ number: value })
  }

  return (
    <>
      <Tip>For Aadhar KYC {withESign && 'and E-Sign'}</Tip>
      <Label htmlFor='aadhar'>Enter Aadhar number</Label>
      <TextField type='text' name='aadhar' value={number} onChange={input} maxLength='12'  />
    </>
  )
}

export default AadharInput