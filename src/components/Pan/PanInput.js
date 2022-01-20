import React from 'react'

import { usePan } from '~/src/store/pan'

import { Tip, Label, TextField } from './styled'

const PanInput = () => {
  const [{ number }, setPan] = usePan()

  return (
    <>
      <Tip>For PAN verification</Tip>
      <Label htmlFor='pan'>Enter PAN</Label>
      <TextField type='text' name='pan' value={number} onChange={setPan}  />
    </>
  )
}

export default PanInput