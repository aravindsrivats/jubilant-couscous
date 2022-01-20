import React from 'react'

import { useBank } from '~/src/store/bank'

import { Tip, Label, TextField, Option, RadioButton, SubLabel } from '~/src/styled/Input'

const BankInput = () => {
  const [{ type, ifsc, accountNumber }, setBank] = useBank()

  const input = e => {
    const { name, value } = e.target
    setBank({ [name]: value })
  }

  return (
    <>
      <Tip>For bank account verification</Tip>
      <Label>Choose a method</Label>
      <Option>
        <RadioButton type='radio' value='upi' name='type' checked={type === 'upi'} onChange={input} />
        <Label>
          Verify with UPI
          <SubLabel>Complete a test payment on any UPI app - PhonePe, Google Pay etc.</SubLabel>
        </Label>
      </Option>
      <Option>
        <RadioButton type='radio' value='bank' name='type' checked={type === 'bank'} onChange={input} />
        <Label>
          Verify with bank account information
          <SubLabel>Provide your bank account number and IFSC code</SubLabel>
        </Label>
      </Option>
      {
        type === 'bank' ? (
          <>
          <Label htmlFor='ifsc'>Enter IFSC</Label>
          <TextField type='text' name='ifsc' value={ifsc} onChange={input}  />
          <Label htmlFor='accountNumber'>Enter bank account number</Label>
          <TextField type='text' name='accountNumber' value={accountNumber} onChange={input}  />
          </>
        ) : null
      }
    </>
  )
}

export default BankInput