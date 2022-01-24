import React from 'react'

import { usePan } from '~/src/store/pan'

import { Tip, Label, TextField } from '~/src/styled/Input'

const PanInput = () => {
  const [{ number, error }, setPan] = usePan()

  const input = e => {
    const { value } = e.target
    setPan({ number: value })
  }

  const focus = () => setPan({ error: false })

  return (
    <>
      <Tip>For PAN verification</Tip>
      <Label htmlFor='pan'>Enter PAN</Label>
      <TextField type='text' name='pan' value={number} onChange={input} maxLength='10' error={error} onFocus={focus} />
    </>
  )
}

export default PanInput