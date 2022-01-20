import React from 'react'

import { useBank } from '~/src/store/bank'

import { Tip, Label, TextField } from '~/src/styled/Input'

const BankInput = () => {
  const [{ type, ifsc, accountNumber }, setBank] = useBank()

  const input = e => {
    const { name, value } = e.target
    setBank({ [name]: value })
  }

  return (
    <>
      <Tip>For bank account verification</Tip>
      <Label htmlFor='pan'>Enter IFSC</Label>
      <TextField type='text' name='ifsc' value={ifsc} onChange={input}  />
      <Label htmlFor='pan'>Enter bank account number</Label>
      <TextField type='text' name='accountNumber' value={accountNumber} onChange={input}  />
    </>
  )
}

export default BankInput