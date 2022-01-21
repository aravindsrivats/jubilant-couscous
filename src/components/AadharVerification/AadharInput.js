import React from 'react'

import { useAadhar } from '~/src/store/aadhar'

import { Tip, Label, TextField } from '~/src/styled/Input'

const AadharInput = () => {
  const [{ number }, setAadhar] = useAadhar()

  const input = e => {
    const { value } = e.target
    setAadhar({ number: value })
  }

  return (
    <>
      <Tip>For Aadhar KYC</Tip>
      <Label htmlFor='aadhar'>Enter Aadhar number</Label>
      <TextField type='text' name='aadhar' value={number} onChange={input}  />
    </>
  )
}

export default AadharInput