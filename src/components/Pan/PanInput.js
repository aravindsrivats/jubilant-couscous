import React from 'react'

import { usePan } from '~/src/store/pan'

const PanInput = () => {
  const [{ number }, setPan] = usePan()

  return (
    <input type='text' value={number} onChange={setPan}  />
  )
}

export default PanInput