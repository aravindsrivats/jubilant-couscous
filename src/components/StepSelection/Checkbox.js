import React, { useState } from 'react'

import { CheckboxInput } from '~/src/styled/Input'
import { CheckboxContainer } from './styled'

const Checkbox = ({ id, label, toggle, error }) => {
  const [checked, setChecked] = useState(false)

  const click = () => {
    setChecked(!checked)
    toggle(id, !checked)
  }

  return (
    <CheckboxContainer>
      <CheckboxInput type='checkbox' name={id} id={id} checked={checked} onChange={click} error={error} />
      <label htmlFor={id}>{label}</label>
    </CheckboxContainer>
  )
}

export { Checkbox }